import React from "react";
import CircleIcon from "./internalComponents/CircleIcon";

interface OutputNodeProps {
  value: number | null | undefined;
}

const OutputNode: React.FC<OutputNodeProps> = ({ value }) => {
  return (
    <div className="final-output">
      <div className="final-output--top">
        <p className="final-output--top--text">Final Output y</p>
      </div>
      <div className="final-output--bottom">
        <div className="final-output--bottom--left">
          <CircleIcon />
          <svg
            className="final-output---connector-line"
            width="67"
            height="7"
            style={{
              position: "absolute",
              left: "-120%",
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
        <div className="final-output--bottom--right">
          <p>{value}</p>
        </div>
      </div>
    </div>
  );
};

export default OutputNode;
