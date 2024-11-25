 interface FunctionNode {
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
  interface Line {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  }

  export type { FunctionNode, Line };