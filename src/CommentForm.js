import React, { useState } from "react";
import { connect } from "react-redux";

import { addComment } from "./actions";

const CommentForm = ({ dispatch }) => {
  const [content, setContent] = useState("");
  const handleAddComment = e => {
    const comment = {
      author: "Me",
      content,
      createdAt: new Date()
    };
    dispatch(addComment(comment));
  };

  return (
    <div>
      <textarea
        value={content}
        onChange={e => {
          e.persist();
          setContent(e.target.value);
        }}
      />
      <button onClick={handleAddComment}>Add</button>
    </div>
  );
};

export default connect(() => ({}))(CommentForm);
