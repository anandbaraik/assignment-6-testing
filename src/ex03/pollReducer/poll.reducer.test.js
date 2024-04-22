import pollReducer from "./poll.reducer";

describe("testing poll reducer", () => {
  it("test to create a poll", () => {
    const initialState = {
      polls: []
    };

    const action = {
      type: "CREATE_POLL",
      payload: {
        id: 1,
        question: "Guess anand's dob",
        options: []
      }
    };
    const updatedPoll = pollReducer(initialState, action);
    expect(updatedPoll).toEqual({
      polls: [
        {
          id: 1,
          question: "Guess anand's dob",
          options: []
        }
      ]
    });
  });
  it("test to add option to the poll", () => {
    const initialState = {
      polls: [
        {
          id: 1,
          question: "Guess anand's dob",
          options: []
        }
      ]
    };
    const action = {
      type: "ADD_OPTION",
      payload: {
        pollId: 1,
        optionText: "27/10/1997",
        votes: 0
      }
    };
    const addedOption = pollReducer(initialState, action);
    expect(addedOption).toEqual({
      polls: [
        {
          id: 1,
          question: "Guess anand's dob",
          options: [
            {
              text: "27/10/1997",
              votes: 0
            }
          ]
        }
      ]
    });
  });
  it("test the  vote action", () => {
    const initialState = {
      polls: [
        {
          id: 1,
          question: "Guess anand's dob",
          options: [
            {
              text: "27/10/1997",
              votes: 0
            }
          ]
        }
      ]
    };
    const action = {
      type: "VOTE",
      payload: {
        pollId: 1,
        optionText: "27/10/1997"
      }
    };

    const incVotes = pollReducer(initialState, action);

    expect(incVotes).toEqual({
      polls: [
        {
          id: 1,
          question: "Guess anand's dob",
          options: [
            {
              text: "27/10/1997",
              votes: 1
            }
          ]
        }
      ]
    });
  });
});
