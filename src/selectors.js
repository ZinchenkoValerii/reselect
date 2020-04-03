import { createSelector } from "reselect";

export const commentsLoader = store => store.commentsReducer.loading;
export const allComments = store => store.commentsReducer.comments;
export const filter = store => store.filterReducer.filter;

export const filteredComments = createSelector(
  [allComments, filter],
  (comments, filter) => {
    if (filter === "NEW") {
      return comments.filter(
        c => c.createdAt.getMonth() === new Date().getMonth()
      );
    }

    return comments;
  }
);
