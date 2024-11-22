import React from "react";
import Header from "./Header";
import ExpressionInput from "./ExpressionInput";
import FunctionPicker from "./FunctionPicker";

const CalculatorNode: React.FC = () => {
  return (
    <div className="calculator-node">
      <Header />
      <ExpressionInput />
      <FunctionPicker />
    </div>
  );
};

export default CalculatorNode;
