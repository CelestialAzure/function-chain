import React from "react";

interface NodeProps {
  position: number;
}
const Node: React.FC<NodeProps> = ({ position }) => {
  return (
    <div className="node-connector--inner_wrapper">
      {position == 1 && (
        <p className="node-connector--inner_text right">output</p>
      )}
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
      {position == 0 && (
        <p className="node-connector--inner_text left">input</p>
      )}
    </div>
  );
};
const NodeConnector: React.FC = () => {
  const numberOfNodes = 2;

  return (
    <div className="node-connector">
      {[...Array(numberOfNodes)].map((_, index) => (
        <Node key={index} position={index} />
      ))}
    </div>
  );
};

export default NodeConnector;
