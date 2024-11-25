import React from "react";

interface CircleIconProps {
  size?: number;
  outerColor?: string;
  innerColor?: string;
}

const CircleIcon: React.FC<CircleIconProps> = ({
  size = 15,
  outerColor = "#dbdbdb",
  innerColor = "#4791ff",
}) => {
  return (
    <svg
      viewBox="0 0 10 10"
      fill="red"
      stroke="currentColor"
      height={size}
      width={size}
    >
      <circle
        cx="5"
        cy="5"
        r="4"
        stroke={outerColor}
        strokeWidth={1}
        fill="none"
      />
      <circle
        cx="5"
        cy="5"
        r="2"
        stroke={innerColor}
        strokeWidth={1}
        fill={innerColor}
      />
    </svg>
  );
};

export default CircleIcon;
