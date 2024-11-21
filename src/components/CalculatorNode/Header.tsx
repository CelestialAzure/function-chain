import React from "react";
import DotCluster from "./internalComponents/DotCluster";

const Header: React.FC = () => {
  return (
    <div className="calculator-node--header">
      <DotCluster />
      <p className="calculator-node--header--title">Calculator</p>
    </div>
  );
};

export default Header;
