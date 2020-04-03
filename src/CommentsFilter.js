import React from "react";
import { connect } from "react-redux";

const CommentsFilter = ({ filter, dispatch }) => {
  return (
    <div>
      <a href="#" onClick={() => dispatch({ type: "ALL" })}>
        All
      </a>
      |{" "}
      <a href="#" onClick={() => dispatch({ type: "NEW" })}>
        New
      </a>
      ({filter})
    </div>
  );
};

const mapStateToProps = state => {
  return state.filterReducer;
};

export default connect(mapStateToProps)(CommentsFilter);
