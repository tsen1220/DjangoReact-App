import React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";

import { connect } from "react-redux";

class CommentForm extends React.Component {
  handleForm = (evt, reqType, articleID) => {
    evt.preventDefault();
    const content = evt.target.elements.content.value;
    console.log(content);

    switch (reqType) {
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

export default connect(mapStateToProps)(CommentForm);
