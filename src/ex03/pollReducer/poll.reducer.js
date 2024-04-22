const initialState = {
  polls: []
};

function pollReducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_POLL":
      return {
        ...state,
        polls: [
          ...state.polls,
          {
            id: action.payload.id,
            question: action.payload.question,
            options: []
          }
        ]
      };
    case "ADD_OPTION":
      return {
        ...state,
        polls: state.polls.map((poll) =>
          poll.id === action.payload.pollId
            ? {
                ...poll,
                options: [
                  ...poll.options,
                  { text: action.payload.optionText, votes: 0 }
                ]
              }
            : poll
        )
      };
    case "VOTE":
      return {
        ...state,
        polls: state.polls.map((poll) =>
          poll.id === action.payload.pollId
            ? {
                ...poll,
                options: poll.options.map((option) =>
                  option.text === action.payload.optionText
                    ? { ...option, votes: option.votes + 1 }
                    : option
                )
              }
            : poll
        )
      };
    default:
      return state;
  }
}

export default pollReducer;
