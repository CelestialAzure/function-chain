import React from "react";
import CalculatorNode from "./components/CalculatorNode/CalculatorNode";
const App: React.FC = () => {
  return (
    <div className="function-chain--wrapper">
      <div className="function-chain">
        <CalculatorNode />
        <CalculatorNode />
        <CalculatorNode />
        <CalculatorNode />
        <CalculatorNode />
      </div>
    </div>
  );
};

export default App;
