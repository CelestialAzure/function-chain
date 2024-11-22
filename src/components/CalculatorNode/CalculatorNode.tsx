import React from "react";
import Header from "./Header";
import ExpressionInput from "./ExpressionInput";

const CalculatorNode: React.FC = () => {
  return (
    <div className="calculator-node">
      <Header />
      <ExpressionInput />
    </div>
  );
};

export default CalculatorNode;
