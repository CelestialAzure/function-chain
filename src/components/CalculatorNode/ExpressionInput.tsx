import React, { useEffect } from "react";
import { FunctionNode } from "../../helpers/types";
import useDebounce from "../../helpers/hooks/useDebounce";
import {
  evaluateEquation,
  validateEquation,
} from "../../helpers/equationHandler";
interface ExpressionInputProps {
  node: FunctionNode;
  setNodes: React.Dispatch<React.SetStateAction<FunctionNode[]>>;
}
const ExpressionInput: React.FC<ExpressionInputProps> = ({
  node,
  setNodes,
}) => {
  useEffect(() => {
    if (!node.input || !node.equation) {
      setNodes((prevNodes) => {
        return prevNodes.map((n) => {
          if (n.id === node.outputUser.id) {
            return {
              ...n,
              input: null,
            };
          }
          if (node.isFinal && n.id === node.id) {
            return {
              ...n,
              finalOutput: null,
            };
          }
          return n;
        });
      });
    } else {
      console.log("input and equation present", node.id);
      setNodes((prevNodes) => {
        return prevNodes.map((n) => {
          if (n.id === node.outputUser.id) {
            console.log("updating output node - effect");
            return {
              ...n,
              input: evaluateEquation(node.equation, node.input),
            };
          }
          if (node.isFinal && n.id === node.id)
            return {
              ...n,
              finalOutput: evaluateEquation(node.equation, node.input),
            };
          return n;
        });
      });
    }
  }, [node.input]);

  const updateOutputNode = (equation: string) => {
    setNodes((prevNodes) => {
      return prevNodes.map((n) => {
        if (n.id === node.outputUser.id)
          return {
            ...n,
            input: evaluateEquation(equation, node.input),
          };
        if (node.isFinal && n.id === node.id)
          return {
            ...n,
            finalOutput: evaluateEquation(equation, node.input),
          };
        return n;
      });
    });
  };
  const debouncedUpdate = useDebounce(updateOutputNode, 500);

  const handleEquationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (!validateEquation(newValue)) return;
    setNodes((prevNodes) =>
      prevNodes.map((n) =>
        n.id === node.id ? { ...n, equation: newValue } : n
      )
    );

    debouncedUpdate(newValue);
  };

  return (
    <div className="expression-input">
      <p className="expression-input--header">Equation</p>
      <input
        className="expression-input--box"
        value={node.equation}
        onChange={handleEquationChange}
        disabled={!node.input}
      />
    </div>
  );
};

export default ExpressionInput;
