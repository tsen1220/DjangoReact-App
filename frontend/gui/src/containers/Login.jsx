import React from "react";

import { Form, Icon, Input, Button, Spin } from "antd";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import * as actions from "../store/actions/auth";

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onAuth(values.username, values.password);
      }
    });
    this.props.history.push("/");
  };

  render() {
    let errMsg = null;
    if (this.props.error) {
      errMsg = <p>{this.props.error.msg}</p>;
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        {errMsg}

        {this.props.loading ? (
          <Spin indicator={antIcon} />
        ) : (
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginRight: "10px" }}
              >
                Login
              </Button>
              Or
              <NavLink style={{ marginRight: "10px" }} to="/signup/">
                {" "}
                Sign up
              </NavLink>
            </Form.Item>
          </Form>
        )}
      </div>
    );
  }
}
//主要組件
const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);

//連結(connect)，組件將會監聽redux store的狀態，若store發生變化，則會調用此函式，確認store狀態，回傳值將會與組件props 連結(可以使用組件props)。
const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  };
};

//連結(connect)，若進行登入action，則會dispatch函式，回傳值將可使用組件props(要connect)。
//dispatch方法為trigger並送出回傳值給store，讓store改變目前狀態，並且回傳值可使用組件props。
const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password) => {
      dispatch(actions.authLogin(username, password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedNormalLoginForm);
