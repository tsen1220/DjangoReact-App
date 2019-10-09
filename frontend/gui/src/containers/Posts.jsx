import React from "react";

import { connect } from "react-redux";
import CustomForm from "../components/Form";

class Posts extends React.Component {
  render() {
    return (
      <div>
        <h1>Create an article</h1>
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

export default connect(mapStateToProps)(Posts);
