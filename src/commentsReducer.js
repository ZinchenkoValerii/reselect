import { ADD_COMMENT, ADD_COMMENT_SUCCESS } from "./actions";

const defaultComments = [
  {
    author: "Me",
    content: "Foo Bar bazz 1",
    createdAt: new Date()
  },
  {
    author: "Me",
    content: "Foo Bar bazz 2",
    createdAt: new Date(2020, 4, 5)
  },
  {
    author: "Me",
    content: "Foo Bar bazz 3",
    createdAt: new Date(2020, 3, 8)
  },
  {
    author: "Me",
    content: "Foo Bar bazz 4",
    createdAt: new Date(2020, 2, 25)
  }
];

const commentsReducer = (
  state = {
    loading: false,
    comments: defaultComments
  },
  action
) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        loading: true
      };
    case ADD_COMMENT_SUCCESS:
      return {
        loading: false,
        comments: [...state.comments, action.comment]
      };
    default:
      return state;
  }
};

export default commentsReducer;
