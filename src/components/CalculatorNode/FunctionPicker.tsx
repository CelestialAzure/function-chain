import React from "react";
import Dropdown from "./internalComponents/Dropdown";

const FunctionPicker: React.FC = () => {
  return (
    <div className="function-picker">
      <p className="function-picker--header">Next function</p>
      <Dropdown disabled={true} />
    </div>
  );
};

export default FunctionPicker;
