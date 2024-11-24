import React from "react";
import Dropdown from "./internalComponents/Dropdown";
import { FunctionNode } from "../../helpers/types";
interface FunctionPickerProps {
  nodes: FunctionNode[];
  node: FunctionNode;
}
const FunctionPicker: React.FC<FunctionPickerProps> = ({ nodes, node }) => {
  console.log("node", nodes);
  return (
    <div className="function-picker">
      <p className="function-picker--header">Next function</p>
      <Dropdown
        disabled={true}
        defaultValue={{
          id: node.outputUser.id,
          label: node.outputUser.name,
        }}
      />
    </div>
  );
};

export default FunctionPicker;
