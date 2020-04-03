import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { filteredComments, commentsLoader } from "./selectors";

const CommentList = ({ comments, loading }) => {
  console.log("comments", comments);

  return loading ? (
    <div>Loading</div>
  ) : (
    <div>
      {comments.map((comment, id) => (
        <div key={id}>
          <h4>{comment.author}</h4>
          <div>{comment.content}</div>
          <time>{comment.createdAt.getTime()}</time>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  comments: filteredComments,
  loading: commentsLoader
});

export default connect(mapStateToProps)(CommentList);
