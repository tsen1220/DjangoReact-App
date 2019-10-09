import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Articles from "../components/Article";
import CustomForm from "../components/Form";

class ArticleList extends React.Component {
  state = {
    articles: []
  };

  //axios.get
  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/article/").then(res => {
      this.setState({
        articles: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <Articles data={this.state.articles} />
        <br />
        <h2>Create an article</h2>
        {this.props.userid ? (
          <CustomForm
            reqType="articlepost"
            articleID={null}
            btntext="Create "
          />
        ) : (
          <span> Login to post new Article </span>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userid: state.userid !== null
  };
};

export default connect(mapStateToProps)(ArticleList);
