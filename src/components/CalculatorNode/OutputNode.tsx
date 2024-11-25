import React from "react";

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
        <div className="final-output--bottom--right">
          <p>{value}</p>
        </div>
      </div>
    </div>
  );
};

export default OutputNode;
