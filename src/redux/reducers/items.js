const initialState = {
  items: [],
  // isLoaded: false,
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PIZZAS":
      return {
        ...state, // возьми старые данные из state
        items: action.payload, // и замени на новый state
        //   isLoaded: true,
      };

    //   case "SET_LOADED":
    //     return {
    //       ...state, // возьми старые данные из state
    //       isLoaded: action.payload,
    //     };

    default:
      return state;
  }
};

export default pizzas;
