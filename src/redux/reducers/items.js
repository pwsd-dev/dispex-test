const initialState = {
  items: [],
  streets: {},
  home: {},
  house: {},
  // isLoaded: false,
};

const streets = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ITEMS":
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

export default streets;
