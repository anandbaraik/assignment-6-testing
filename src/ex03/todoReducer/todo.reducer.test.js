import todoReducer from "./todo.reducer";

describe("testing todoReducer", () => {
  it("test to add new todo", () => {
    const initialState = {
      todos: []
    };
    const action = {
      type: "ADD_TODO",
      payload: {
        id: 1,
        text: "Write assignment test",
        completed: false
      }
    };

    const updatedTodo = todoReducer(initialState, action);
    expect(updatedTodo).toEqual({
      todos: [
        {
          id: 1,
          text: "Write assignment test",
          completed: false
        }
      ]
    });
  });
  it("test to toggle the added todo to completed", () => {
    const initialState = {
      todos: [
        {
          id: 1,
          text: "Write assignment test",
          completed: false
        }
      ]
    };
    const action = {
      type: "TOGGLE_TODO",
      payload: {
        id: 1
      }
    };
    const updatedTodo = todoReducer(initialState, action);
    expect(updatedTodo).toEqual({
      todos: [
        {
          id: 1,
          text: "Write assignment test",
          completed: true
        }
      ]
    });
  });
});
