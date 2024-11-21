import React from "react";

interface DotClusterProps {
  dots?: number;
}

const DotCluster: React.FC<DotClusterProps> = ({ dots = 6 }) => {
  return (
    <div className="dot-cluster">
      {[...Array(dots)].map((_, index) => (
        <div key={index} className="dot-cluster--dot" />
      ))}
    </div>
  );
};

export default DotCluster;
