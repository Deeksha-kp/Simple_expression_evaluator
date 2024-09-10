import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setExpression, evaluateExpression } from './redux/actions';
import './App.css'; 

const App = () => {
  const expression = useSelector((state) => state.expression);
  const result = useSelector((state) => state.result);
  const dispatch = useDispatch();
  const [input, setInput] = useState(expression);

  const handleChange = (e) => {
    setInput(e.target.value);
    dispatch(setExpression(e.target.value));
  };

  const handleEvaluate = () => {
    dispatch(evaluateExpression());
  };

  const handleReset = () => {
    setInput('');
    dispatch(setExpression(''));
  };

  return (
    <div className="App">
      <div className="card">
        <h1 className="title">Simple Expression Evaluator</h1>
        <h2 className="result">Result: {result}</h2>

        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter expression"
          className="form-control mb-3"
          aria-label="Expression input"
        />

        <div className="button-group">
          <button className="btn btn-evaluate" onClick={handleEvaluate}>
           evaluate
          </button>
          <button className="btn btn-reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
