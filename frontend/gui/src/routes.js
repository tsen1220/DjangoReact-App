import React from "react";
import { Route } from "react-router-dom";

import ArticleList from "./containers/ArticleListView";
import ArticleDetail from "./containers/ArticleDetailView";
import Login from "./containers/Login";
import Signup from "./containers/Signup";

//React Route 藉由Route來渲染component
//<Route exact path='路徑' component={選擇的component}

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={ArticleList} />
    <Route exact path="/articles/:articleID" component={ArticleDetail} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
  </div>
);

export default BaseRouter;
