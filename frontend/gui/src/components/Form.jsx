import React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";

class CustomForm extends React.Component {
  handleForm = (evt, reqType, articleID) => {
    evt.preventDefault();
    const title = evt.target.elements.title.value;
    const content = evt.target.elements.content.value;
    console.log(title, content);

    switch (reqType) {
      case "post":
        axios
          .post("http://127.0.0.1:8000/api/create/", {
            title: title,
            content: content
          })
          .then(res => {
            console.log(res);
            window.location.pathname = "";
          })
          .catch(err => {
            console.log(err);
          });
        break;
      case "put":
        axios
          .put(`http://127.0.0.1:8000/api/${articleID}/update/`, {
            title: title,
            content: content
          })
          .then(res => {
            console.log(res);
            window.location.pathname = "";
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
    return (
      <div>
        <Form
          onSubmit={evt =>
            this.handleForm(evt, this.props.reqType, this.props.articleID)
          }
        >
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

export default CustomForm;
