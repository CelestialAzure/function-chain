import React from "react";
import Header from "./Header";
import ExpressionInput from "./ExpressionInput";
import FunctionPicker from "./FunctionPicker";
import NodeConnector from "./NodeConnector";
import { FunctionNode } from "../../helpers/types";
interface CalculatorNodeProps {
  node: FunctionNode;
  nodes: FunctionNode[];
  setNodes: React.Dispatch<React.SetStateAction<FunctionNode[]>>;
}
const CalculatorNode: React.FC<CalculatorNodeProps> = ({
  node,
  nodes,
  setNodes,
}) => {
  return (
    <div className="calculator-node">
      <Header title={node.id} />
      <ExpressionInput node={node} setNodes={setNodes} />
      <FunctionPicker nodes={nodes} node={node} />
      <NodeConnector />
    </div>
  );
};

export default CalculatorNode;
