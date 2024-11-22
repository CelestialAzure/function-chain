import React from "react";
import Header from "./Header";
import ExpressionInput from "./ExpressionInput";
import FunctionPicker from "./FunctionPicker";
import NodeConnector from "./NodeConnector";

const CalculatorNode: React.FC = () => {
  return (
    <div className="calculator-node">
      <Header />
      <ExpressionInput />
      <FunctionPicker />
      <NodeConnector />
    </div>
  );
};

export default CalculatorNode;
