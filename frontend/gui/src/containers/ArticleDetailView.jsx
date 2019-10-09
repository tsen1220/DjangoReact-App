import React from "react";
import axios from "axios";
import { Card, Button } from "antd";
import Comment from "../components/Comment";
import CommentForm from "../components/CommentForm";
import { connect } from "react-redux";
import CustomForm from "../components/Form";

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
  handleDeleteArticle(event) {
    event.preventDefault();
    const articleID = this.props.match.params.articleID;
    axios.delete(`http://127.0.0.1:8000/api/article/${articleID}`).then(() => {
      window.location.pathname = "";
    });
  }

  render() {
    return (
      <div>
        <Card title={this.state.article.title}>
          <p>{this.state.article.content}</p>

          {this.state.article.user === this.props.userid ? (
            <CustomForm
              reqType="put"
              articleID={this.props.match.params.articleID}
              btntext="Update"
              revisemsg="Revise"
            />
          ) : (
            <span></span>
          )}

          {this.state.article.user === this.props.userid ? (
            <form onSubmit={evt => this.handleDeleteArticle(evt)}>
              <Button type="danger" htmlType="submit">
                DeleteArticle
              </Button>
            </form>
          ) : (
            <span></span>
          )}
        </Card>
        <Comment data={this.state.comment}></Comment>

        <CommentForm
          reqType="commentpost"
          articleID={this.props.match.params.articleID}
          btntext="Reply"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userid: state.userid
  };
};

export default connect(mapStateToProps)(ArticleDetail);
