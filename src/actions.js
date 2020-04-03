export const ADD_COMMENT = "comments/ADD_COMMENT";
export const ADD_COMMENT_SUCCESS = "comments/ADD_COMMENT_SUCCESS";

function saveComment(comment) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ ...comment, id: Date.now() });
    }, 2000);
  });
}

export function addComment(commentData) {
  return async (dispatch, getState, { logger }) => {
    dispatch({ type: ADD_COMMENT });
    logger.info("Send create comment request");
    const comment = await saveComment(commentData);

    dispatch({
      type: ADD_COMMENT_SUCCESS,
      comment
    });
  };
}
