import React from "react";

const ExpressionInput: React.FC = () => {
  return (
    <div className="expression-input">
      <p className="expression-input--header">Equation</p>
      <input className="expression-input--box" />
    </div>
  );
};

export default ExpressionInput;
