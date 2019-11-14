import * as actionType from "./actionTypes";
import axios from "axios";

//驗證開始 回傳含驗證開始類型 的物件
export const authStart = () => {
  return {
    type: actionType.AUTH_START
  };
};

//驗證成功會給予一個金鑰，並回傳 含金鑰以及驗證成功類型 的物件
export const authSuccess = (token, userid) => {
  return {
    type: actionType.AUTH_SUCCESS,
    token: token,
    userid: userid
  };
};

//驗證失敗，驗證失敗會catch error事件，並回傳 含錯誤事件以及驗證失敗類型 的物件
export const authFail = error => {
  return {
    type: actionType.AUTH_FAIL,
    error: error
  };
};

//登出則移除使用者以及預定登出的時間 並回傳登出的訊息(localStorage.removeItem('data'))
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userid");
  localStorage.removeItem("expirationDate");
  return {
    type: actionType.AUTH_LOGOUT
  };
};

//如果時間到了(setTimeout)，則dispatch(logout)
export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 10000);
  };
};

//驗證登入(預設為username跟password)
//1.會先dispatch【驗證開始】事件
//2.串接登入的API(POST方法)
//3.當伺服器回應請求，給這個帳戶一個金鑰(token)以及設定預定的登出時間(expirationDate)
//4.在localStorage中setItem，setItem內容為金鑰(token)以及設定預定的登出時間(expirationDate)
//5.dispatch authSuccess 以及 checkAuthTimeout:
//(1)authSuccess驗證成功 回傳物件 type:action.AUTH_SUCCESS、token:token
//(2)checkAuthTimeout 時間到了所設定之值會自動登出
//6.捕捉錯誤事件(catch)，若有錯誤事件產生，捕捉並執行authFail(error)，回傳物件 type:actionType.AUTH_FAIL、錯誤訊息(error)

export const authLogin = (username, password) => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post("http://127.0.0.1:8000/rest-auth/login/", {
        username: username,
        password: password
      })
      .then(res => {
        const token = res.data.key;
        const userid = res.data.user.username;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("userid", userid);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(token, userid));
        dispatch(checkAuthTimeout(3600));
      })
      .catch(err => {
        alert(" Please check your username and password!");
        dispatch(authFail(err));
      });
  };
};

//驗證註冊同驗證登入，POST的值為註冊所需的資料
export const authSignup = (username, email, password1, password2) => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post("http://127.0.0.1:8000/rest-auth/registration/", {
        username: username,
        email: email,
        password1: password1,
        password2: password2
      })
      .then(res => {
        const token = res.data.key;
        const userid = res.data.user.username;

        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("userid", userid);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(token, userid));
        dispatch(checkAuthTimeout(3600));
      })
      .catch(err => {
        alert(
          "Maybe account is existed. Or check password which must contain at least 8 characters mixed English with numbers."
        );
        dispatch(authFail(err));
      });
  };
};

//確認現在的狀態:
//1.會先獲取token，如果token未定義，會dispatch登出的function
//2.接下來會確認預定的登出時間，如果時間已到達或大於登出的時間，直接登出
//3.如果皆在狀態內，則dispatch(authSuccess(token))，確定仍在登入狀態
//4.會dispatch( checkAuthTimeout(expirationDate.getTime() - new Date().getTime() / 1000)，更新剩餘的登入時間。
export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    const userid = localStorage.getItem("userid");
    if (token === undefined) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token, userid));
        dispatch(
          checkAuthTimeout(
            expirationDate.getTime() - new Date().getTime() / 1000
          )
        );
      }
    }
  };
};
