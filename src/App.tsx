import React, { useEffect, useRef, useState } from "react";
import CalculatorNode from "./components/CalculatorNode/CalculatorNode";
import { FunctionNode } from "./helpers/types";
import { defaultNodes } from "./helpers/constants";
interface Line {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const App: React.FC = () => {
  //* Local States - >
  const [nodes, setNodes] = useState<FunctionNode[]>(defaultNodes);
  const [lines, setLines] = useState<
    Array<{ x1: number; y1: number; x2: number; y2: number }>
  >([]);

  //* Refs ->
  const outputRefs = useRef<(HTMLDivElement | null)[]>([]);
  const inputRefs = useRef<(HTMLDivElement | null)[]>([]);

  //* Effect to update lines on window resize ->
  useEffect(() => {
    const updateLines = () => {
      const newLines = nodes
        .map((node): Line | null => {
          if (node.outputUser.id !== null) {
            const sourceElement = outputRefs.current[node.id];
            const targetElement = inputRefs.current[node.outputUser.id];

            if (sourceElement && targetElement) {
              const sourceRect = sourceElement.getBoundingClientRect();
              const targetRect = targetElement.getBoundingClientRect();

              return {
                x1: sourceRect.left + sourceRect.width / 2,
                y1: sourceRect.top + sourceRect.height / 2,
                x2: targetRect.left + targetRect.width / 2,
                y2: targetRect.top + targetRect.height / 2,
              };
            }
          }
          return null;
        })
        .filter((line): line is Line => line !== null);

      setLines(newLines);
    };

    updateLines();
    window.addEventListener("resize", updateLines);
    return () => window.removeEventListener("resize", updateLines);
  }, [nodes.length]);

  return (
    <div className="function-chain--wrapper">
      <div className="function-chain">
        {nodes.map((node) => (
          <CalculatorNode
            key={node.id}
            node={node}
            nodes={nodes}
            setNodes={setNodes}
            outputRefs={outputRefs}
            inputRefs={inputRefs}
          />
        ))}
        <svg className="function-chain--connection-lines">
          {lines.map((line, index) => (
            <line
              key={index}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default App;
