import React from "react";
import { FunctionNode } from "../../helpers/types";
import OutputNode from "./OutputNode";
import InputNode from "./InputNode";
import CircleIcon from "./internalComponents/CircleIcon";
interface NodeProps {
  position: number;
  outputRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  inputRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  nodeData: FunctionNode;
  setNodes: React.Dispatch<React.SetStateAction<FunctionNode[]>>;
}
interface NodeConnectorProps {
  outputRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  inputRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  nodeData: FunctionNode;
  setNodes: React.Dispatch<React.SetStateAction<FunctionNode[]>>;
}
const Node: React.FC<NodeProps> = ({
  position,
  outputRefs,
  inputRefs,
  nodeData,
  setNodes,
}) => {
  return (
    <div className="node-connector--inner_wrapper">
      {position == 1 && (
        <>
          <p className="node-connector--inner_text right">output</p>
          <div
            className="node-connector--connection_point"
            ref={(el) => (outputRefs.current[nodeData.id] = el)}
          >
            <CircleIcon />
            {nodeData.isFinal && <OutputNode value={nodeData?.finalOutput} />}
          </div>
        </>
      )}

      {position == 0 && (
        <>
          <div
            className="node-connector--connection_point"
            ref={(el) => (inputRefs.current[nodeData.id] = el)}
          >
            <CircleIcon />

            {nodeData.isInitial && (
              <InputNode node={nodeData} setNodes={setNodes} />
            )}
          </div>
          <p className="node-connector--inner_text left">input</p>
        </>
      )}
    </div>
  );
};
const NodeConnector: React.FC<NodeConnectorProps> = ({
  outputRefs,
  inputRefs,
  nodeData,
  setNodes,
}) => {
  const numberOfNodes = 2;

  return (
    <div className="node-connector">
      {[...Array(numberOfNodes)].map((_, index) => (
        <Node
          key={index}
          position={index}
          outputRefs={outputRefs}
          inputRefs={inputRefs}
          nodeData={nodeData}
          setNodes={setNodes}
        />
      ))}
    </div>
  );
};

export default NodeConnector;
