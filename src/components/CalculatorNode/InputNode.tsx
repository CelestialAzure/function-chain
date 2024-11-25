import React from "react";
import { FunctionNode } from "../../helpers/types";
import CircleIcon from "./internalComponents/CircleIcon";

interface InputNodeProps {
  node: FunctionNode;
  setNodes: React.Dispatch<React.SetStateAction<FunctionNode[]>>;
}

const InputNode: React.FC<InputNodeProps> = ({ node, setNodes }) => {
  //* Function to handle input updates -> (will trigger cascade of updates)
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
          <CircleIcon />

          <svg
            className="initial-input--connector-line"
            width="67"
            height="7"
            style={{
              position: "absolute",
              left: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "transparent",
            }}
          >
            <line
              x1="3.5"
              y1="3.5"
              x2="60"
              y2="3.5"
              fill="none"
              stroke="#0066ff"
              strokeWidth="7"
              opacity="0.3"
              style={{ strokeLinecap: "round" }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default InputNode;
