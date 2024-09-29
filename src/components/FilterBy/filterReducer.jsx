

export const initialState = {
    brand: '',
    price: '',
    color: '',
  };
  
  export const filterReducer = (state, action) => {
    switch (action.type) {
      case 'SET_BRAND':
        return { ...state, brand: action.payload };
      case 'SET_PRICE':
        return { ...state, price: action.payload };
      case 'SET_COLOR':
        return { ...state, color: action.payload };
      case 'RESET_FILTER':
        return initialState;
      default:
        return state;
    }
  };
  