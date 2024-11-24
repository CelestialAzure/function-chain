export interface FunctionNode {
    id: number;
    name: string;
    equation: string;
    outputUser:  {
      id: number | null;
      name: string;
    };
    input: string;
    isInitial: boolean;
    isFinal: boolean;
  }
  