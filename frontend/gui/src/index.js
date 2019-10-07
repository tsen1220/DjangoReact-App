import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

//react redux
//reducer為檢驗當前狀態 及 action執行後，將變更的狀態
import reducer from "./store/reducers/auth";

//composeEnhances:如有redux開發工具COMPOSE，選之，若無 則使用compose
// compose:從右至左合成為最終函數 compose(funcA , funcB , funcC ) => compose(funcA(funcB(funcC())))

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//建立狀態管理store  createStore(reducer,composeEnhances(applyMiddleware(thunk))) 中介使用redux-thunk
//thunk化 可以回傳一個function
const store = createStore(reducer, composeEnhances(applyMiddleware(thunk)));

//Provider:可以讓組件 取得store狀態(state)
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();
