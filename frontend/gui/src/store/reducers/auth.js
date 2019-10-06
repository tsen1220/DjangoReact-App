import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

//updateObject(當前狀態,須更新的狀態))

//store初始狀態
const initialState = {
  token: null,
  error: null,
  loading: false
};

//store驗證開始狀態
const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

//store驗證成功狀態
const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    error: null,
    loading: false
  });
};

//store驗證失敗狀態
const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

//store驗證登出狀態
const authLogout = (state, action) => {
  return updateObject(state, {
    token: null
  });
};

//reducer檢驗當前狀態 及 action執行後，將變更的狀態
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
