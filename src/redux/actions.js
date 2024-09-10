export const setExpression = (expression) => {
    return {
      type: 'SET_EXPRESSION',
      payload: expression,
    };
  };
  
  export const evaluateExpression = () => {
    return {
      type: 'EVALUATE_EXPRESSION',
    };
  };