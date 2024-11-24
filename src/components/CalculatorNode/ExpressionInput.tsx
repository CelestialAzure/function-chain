import React from "react";
import { FunctionNode } from "../../helpers/types";
interface ExpressionInputProps {
  node: FunctionNode;
  setNodes: React.Dispatch<React.SetStateAction<FunctionNode[]>>;
}
const ExpressionInput: React.FC<ExpressionInputProps> = ({
  node,
  setNodes,
}) => {
  return (
    <div className="expression-input">
      <p className="expression-input--header">Equation</p>
      <input className="expression-input--box" value={node.input} />
    </div>
  );
};

export default ExpressionInput;
