const initialState = {
  favorites: [],
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITES_ARRAY":
      return {
        ...state,
        favorites: action.dat,
        counter: state.counter + 1,
      };
    case "DELETE_FAVORITES_ARRAY":
      return {
        ...state,
        favorites: action.value,
        counter: state.counter - 1,
      };

    default:
      return state;
  }
};

export default reducer;
