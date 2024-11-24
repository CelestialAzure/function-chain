import React, { useEffect } from "react";
import { FunctionNode } from "../../helpers/types";
import useDebounce from "../../helpers/hooks/useDebounce";
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
      //Reset current nodes output user input
      // console.log("no input or equation", node.id);
      setNodes((prevNodes) => {
        return prevNodes.map((n) => {
          if (n.id === node.outputUser.id) {
            // console.log("resetting output node - effect");
            return {
              ...n,
              input: "", // Your evaluation logic here
            };
          }
          return n;
        });
      });
    } else {
      //Set output user input
      console.log("input and equation present", node.id);
      setNodes((prevNodes) => {
        return prevNodes.map((n) => {
          if (n.id === node.outputUser.id) {
            console.log("updating output node - effect");
            return {
              ...n,
              input: evaluate(node.equation), // Your evaluation logic here
            };
          }
          return n;
        });
      });
    }
  }, [node.input]);

  const evaluate = (input: string) => {
    const valid = ["+", "-", "*", "/"];
    if (valid.includes(input)) return input;
    console.log("0----no----");
    return "";
  };
  const updateOutputNode = (equation: string) => {
    setNodes((prevNodes) => {
      return prevNodes.map((n) => {
        if (n.id === node.outputUser.id) {
          return {
            ...n,
            input: evaluate(equation), // Your evaluation logic here
          };
        }
        return n;
      });
    });
  };
  const debouncedUpdate = useDebounce(updateOutputNode, 500);

  const handleEquationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

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
