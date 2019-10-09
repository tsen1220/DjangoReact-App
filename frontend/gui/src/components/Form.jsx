import React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";

import { connect } from "react-redux";

class CustomForm extends React.Component {
  handleForm = (evt, reqType, articleID) => {
    evt.preventDefault();
    const title = evt.target.elements.title.value;
    const content = evt.target.elements.content.value;
    console.log(content);

    switch (reqType) {
      case "articlepost":
        axios
          .post("http://127.0.0.1:8000/api/article/", {
            title: title,
            content: content,
            user: this.props.userid
          })
          .then(res => {
            console.log(res);
            window.location.pathname = "";
          })
          .catch(err => {
            console.log(err);
          });
        break;
      case "commentpost":
        axios
          .post(`http://127.0.0.1:8000/api/comment/`, {
            article: articleID,
            content: content,
            user: this.props.userid
          })
          .then(res => {
            console.log(res);
            window.location.pathname = `/articles/${articleID}`;
          })
          .catch(err => {
            console.log(err);
          });
        break;

      case "put":
        axios
          .put(`http://127.0.0.1:8000/api/article/${articleID}`, {
            title: title,
            content: content
          })
          .then(res => {
            console.log(res);
            window.location.pathname = `articles/${articleID}`;
          })
          .catch(err => {
            console.log(err);
          });
        break;

      default:
        console.log("No respones");
    }
  };

  render() {
    const style = {
      fontSize: "20px"
    };

    return (
      <div>
        <Form
          onSubmit={evt =>
            this.handleForm(evt, this.props.reqType, this.props.articleID)
          }
        >
          <span style={style}> {this.props.revisemsg}</span>
          <Form.Item label="Title">
            <Input name="title" placeholder="Put a title here" />
          </Form.Item>

          <Form.Item label="Content">
            <Input name="content" placeholder="Enter some content ..." />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {this.props.btntext}
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userid: state.userid
  };
};

export default connect(mapStateToProps)(CustomForm);
