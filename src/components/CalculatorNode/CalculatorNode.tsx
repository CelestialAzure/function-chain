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
  outputRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  inputRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}
const CalculatorNode: React.FC<CalculatorNodeProps> = ({
  node,
  nodes,
  setNodes,
  outputRefs,
  inputRefs,
}) => {
  return (
    <div className="calculator-node">
      <Header title={node.name} />
      <ExpressionInput node={node} setNodes={setNodes} />
      <FunctionPicker nodes={nodes} node={node} />
      <NodeConnector
        outputRefs={outputRefs}
        inputRefs={inputRefs}
        nodeData={node}
      />
    </div>
  );
};

export default CalculatorNode;
