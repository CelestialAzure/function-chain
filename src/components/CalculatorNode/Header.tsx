import React from "react";
import DotCluster from "./internalComponents/DotCluster";
interface HeaderProps {
  title: string;
}
const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="calculator-node--header">
      <DotCluster />
      <p className="calculator-node--header--title">{title}</p>
    </div>
  );
};

export default Header;
