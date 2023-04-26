export const INITIAL_STATE = {
  title: "",
  desc: "",
  images: {
    sm: "",
    lg: "",
    md: "",
  },
  price: 0,
  category: "",
  quantity: null,
  tags: [],
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "INCREASE":
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case "DECREASE":
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    case "ADD_TAG":
      return {
        ...state,
        tags: [...state.tags, action.payload],
      };
    case "REMOVE_TAG":
        return{
            ...state,
            tags:state.tags.filter(tag=>tag !== action.payload)
        }
    default:
      return state;
  }
};
