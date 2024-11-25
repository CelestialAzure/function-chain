 interface FunctionNode {
    id: number;
    name: string;
    equation: string;
    outputUser:  {
      id: number | null;
      name: string;
    };
    input: number | null;
    isInitial: boolean;
    isFinal: boolean;
    finalOutput?:number|null|undefined
  }
  interface Line {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  }

  export type { FunctionNode, Line };