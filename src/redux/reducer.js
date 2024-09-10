const initialState = {
    expression: '',
    result: 0,
  };
  
  const expressionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_EXPRESSION':
        return {
          ...state,
          expression: action.payload,
        };
      case 'EVALUATE_EXPRESSION':
        try {
          const evaluatedResult = eval(state.expression); 
          return {
            ...state,
            result: evaluatedResult,
          };
        } catch (error) {
          return {
            ...state,
            result: 'Error',
          };
        }
      default:
        return state;
    }
  };
  
  export default expressionReducer;