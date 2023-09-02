export const todoReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TASK": {
      const newTodo = [...state.todo, payload];
      return {
        ...state,
        todo: newTodo,
      };
    }
    case "UPDATE_TASK": {
      state.todo.find((item) => {
        if (item.id === payload) {
          item.status = "done";
        }
      });
      return {
        ...state,
      };
    }

    case "REMOVE_TASK": {
        const removedTodo = state.todo?.filter(item => item.id !== payload)
      return{
        ...state ,
        todo : removedTodo
      }
    }
    default:
      return;
  }
};
