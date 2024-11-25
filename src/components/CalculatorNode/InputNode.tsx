import React from "react";
import { FunctionNode } from "../../helpers/types";

interface InputNodeProps {
  node: FunctionNode;
  setNodes: React.Dispatch<React.SetStateAction<FunctionNode[]>>;
}

const InputNode: React.FC<InputNodeProps> = ({ node, setNodes }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const getNumber = () => {
      return parseFloat(e.target.value);
    };
    setNodes((prevNodes) =>
      prevNodes.map((n) =>
        n.id === node.id
          ? { ...n, input: newValue === "" ? null : getNumber() }
          : n
      )
    );
  };
  return (
    <div className="initial-input">
      <div className="initial-input--top">
        <p className="initial-input--top--text">Initial value of x</p>
      </div>
      <div className="initial-input--bottom">
        <div className="initial-input--bottom--right">
          <input
            className="initial-input--box"
            value={node.input ?? ""}
            onChange={handleInputChange}
            type="number"
          />
        </div>
        <div className="initial-input--bottom--left">
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
      </div>
    </div>
  );
};

export default InputNode;
