import React, { useState } from "react";
import CalculatorNode from "./components/CalculatorNode/CalculatorNode";
import { FunctionNode } from "./helpers/types";
import { defaultNodes } from "./helpers/constants";
const App: React.FC = () => {
  const [nodes, setNodes] = useState<FunctionNode[]>(defaultNodes);

  return (
    <div className="function-chain--wrapper">
      <div className="function-chain">
        {nodes.map((node) => (
          <CalculatorNode
            key={node.id}
            node={node}
            nodes={nodes}
            setNodes={setNodes}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
