const initialState = {
    comments: []
  };

  function commentReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case "ADD_COMMENT":
        return {
          ...state,
          comments: [...state.comments, payload]
        };

      case "REMOVE_COMMENT":
        return {
          ...state,
          comments: state.comments.filter((comment) => comment.id !== payload.id)
        };

      case "ADD_REPLY":
        return {
          ...state,
          comments: state.comments.map((comment) =>
            comment.id === payload.id
              ? {
                  ...comment,
                  replies: [...comment.replies, payload.reply]
                }
              : comment
          )
        };

      case "REMOVE_REPLY":
        return {
          ...state,
          comments: state.comments.map((comment) =>
            comment.id === payload.id
              ? {
                  ...comment,
                  replies: comment.replies.filter(
                    (_, index) => index !== payload.replyIndex
                  )
                }
              : comment
          )
        };

      case "UPVOTE_COMMENT":
        return {
          ...state,
          comments: state.comments.map((comment) =>
            comment.id === payload.id
              ? { ...comment, votes: comment.votes + 1 }
              : comment
          )
        };

      case "DOWNVOTE_COMMENT":
        return {
          ...state,
          comments: state.comments.map((comment) =>
            comment.id === payload.id
              ? { ...comment, votes: comment.votes - 1 }
              : comment
          )
        };

      default:
        return state;
    }
  }

  export default commentReducer;
