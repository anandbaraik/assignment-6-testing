import commentReducer from "./comment.reducer";

describe("testing commentReducer", () => {
  it("test to handle ADD_COMMENT ", () => {
    const initialState = {
      comments: []
    };
    const action = {
      type: "ADD_COMMENT",
      payload: {
        id: 1,
        text: "comment 1",
        votes: 0,
        replies: []
      }
    };
    const addNewComment = commentReducer(initialState, action);

    expect(addNewComment.comments[0]).toEqual({
      id: 1,
      text: "comment 1",
      votes: 0,
      replies: []
    });
  });

  it("test to handle REMOVE_COMMENT", () => {
    const initialState = {
      comments: [
        {
          id: 1,
          text: "Comment 1",
          votes: 5,
          replies: []
        },
        {
          id: 2,
          text: "Comment 2",
          votes: 3,
          replies: []
        }
      ]
    };
    const action = {
      type: "REMOVE_COMMENT",
      payload: { id: 1 }
    };
    const removeCommnet = commentReducer(initialState, action);

    expect(removeCommnet.comments[0]).toEqual({
      id: 2,
      text: "Comment 2",
      votes: 3,
      replies: []
    });
  });

  it("test to handle UPVOTE_COMMENT ", () => {
    const initialState = {
      comments: [
        {
          id: 1,
          text: "Comment 1",
          votes: 5,
          replies: []
        }
      ]
    };
    const action = {
      type: "UPVOTE_COMMENT",
      payload: { id: 1 }
    };
    const upVotesCommentCount = commentReducer(initialState, action);

      expect(upVotesCommentCount.comments[0].votes).toBe(6);
  });

  it("test to handle ADD_REPLY", () => {
    const initialState = {
      comments: [
        {
          id: 1,
          text: "Comment 1",
          votes: 5,
          replies: []
        }
      ]
    };
    const action = {
      type: "ADD_REPLY",
      payload: { id: 1, reply: "Reply to Comment 1" }
    };
    const addReply = commentReducer(initialState, action);

    expect(addReply.comments[0].replies[0]).toBe("Reply to Comment 1");
  });

  it("test to handle REMOVE_REPLY", () => {
    const initialState = {
      comments: [
        {
          id: 1,
          text: "Comment 1",
          votes: 5,
          replies: ["Reply 1", "Reply 2"]
        }
      ]
    };
    const action = {
      type: "REMOVE_REPLY",
      payload: { id: 1, replyIndex: 1 }
    };
    const removeReply = commentReducer(initialState, action);

    expect(removeReply.comments[0].replies[0]).toBe("Reply 1");
  });

  it("test to handle DOWNVOTE_COMMENT", () => {
    const initialState = {
      comments: [
        {
          id: 1,
          text: "Comment 1",
          votes: 5,
          replies: []
        }
      ]
    };
    const action = {
      type: "DOWNVOTE_COMMENT",
      payload: { id: 1 }
    };
    const downVoteCount = commentReducer(initialState, action);

    expect(downVoteCount.comments[0].votes).toBe(4);
  });
});
