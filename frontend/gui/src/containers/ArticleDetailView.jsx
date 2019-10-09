import React from "react";
import axios from "axios";
import { Card } from "antd";
import Comment from "../components/Comment";
import CommentForm from "../components/CommentForm";

class ArticleDetail extends React.Component {
  state = {
    article: {}
  };

  //axios.get
  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios
      .get(`http://127.0.0.1:8000/api/article/${articleID}`)
      .then(res => {
        this.setState({
          article: res.data
        });
      })
      .then(() => {
        axios
          .get(`http://127.0.0.1:8000/api/comment/?article=${articleID}`)
          .then(res => {
            this.setState({
              comment: res.data
            });
          });
      });
  }

  //axios.delete
  handleDelete(event) {
    event.preventDefault();
    const articleID = this.props.match.params.articleID;
    axios.delete(`http://127.0.0.1:8000/api/${articleID}/delete/`).then(() => {
      window.location.pathname = "";
    });
  }

  render() {
    return (
      <div>
        <Card title={this.state.article.title}>
          <p>{this.state.article.content}</p>
        </Card>
        <Comment data={this.state.comment}></Comment>

        <CommentForm
          reqType="commentpost"
          articleID={this.props.match.params.articleID}
          btntext="Reply"
        />

        {/* <CustomForm
          reqType="put"
          articleID={this.props.match.params.articleID}
          btntext="Update"
        /> */}

        {/* <form onSubmit={evt => this.handleDelete(evt)}>
          <Button type="danger" htmlType="submit">
            Delete
          </Button>
        </form> */}
      </div>
    );
  }
}

export default ArticleDetail;
