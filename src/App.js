import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import CommentsFilter from "./CommentsFilter";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>Comments</h2>
        <CommentsFilter />
        <CommentList />
        <CommentForm />
      </div>
    </Provider>
  );
}
