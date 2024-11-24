import React from "react";
import { FunctionNode } from "../../helpers/types";
interface NodeProps {
  position: number;
  outputRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  inputRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  nodeData: FunctionNode;
}
interface NodeConnectorProps {
  outputRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  inputRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  nodeData: FunctionNode;
}
const Node: React.FC<NodeProps> = ({
  position,
  outputRefs,
  inputRefs,
  nodeData,
}) => {
  return (
    <div className="node-connector--inner_wrapper">
      {position == 1 && (
        <>
          <p className="node-connector--inner_text right">output</p>
          <div
            className="connection-point"
            ref={(el) => (outputRefs.current[nodeData.id] = el)}
          >
            <svg
              viewBox="0 0 10 10"
              fill="red"
              stroke="currentColor"
              height={15}
              width={15}
            >
              <circle
                cx="5"
                cy="5"
                r="4"
                stroke="#dbdbdb"
                strokeWidth={1}
                fill="none"
              />
              <circle
                cx="5"
                cy="5"
                r="2"
                stroke="#4791ff"
                strokeWidth={1}
                fill="#4791ff"
              />
            </svg>
          </div>
        </>
      )}

      {position == 0 && (
        <>
          <div
            className="connection-point"
            ref={(el) => (inputRefs.current[nodeData.id] = el)}
          >
            <svg
              viewBox="0 0 10 10"
              fill="red"
              stroke="currentColor"
              height={15}
              width={15}
            >
              <circle
                cx="5"
                cy="5"
                r="4"
                stroke="#dbdbdb"
                strokeWidth={1}
                fill="none"
              />
              <circle
                cx="5"
                cy="5"
                r="2"
                stroke="#4791ff"
                strokeWidth={1}
                fill="#4791ff"
              />
            </svg>
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
        />
      ))}
    </div>
  );
};

export default NodeConnector;
