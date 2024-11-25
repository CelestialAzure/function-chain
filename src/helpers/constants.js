export const defaultNodes = [
  {
    id: 1,
    name: "Function: 1",
    equation: "",
    outputUser: {
      id: 2,
      name: "Function: 2",
    },
    input: 2,
    isInitial: true,
    isFinal: false,
  },
  {
    id: 2,
    name: "Function: 2",
    equation: "",
    outputUser: {
      id: 4,
      name: "Function: 4",
    },
    input: null,
    isInitial: false,
    isFinal: false,
  },
  {
    id: 3,
    name: "Function: 3",
    equation: "",
    outputUser: {
      id: null,
      name: "",
    },
    input: null,
    isInitial: false,
    isFinal: true,
  },
  {
    id: 4,
    name: "Function: 4",
    equation: "",
    outputUser: {
      id: 5,
      name: "Function: 5",
    },
    input: null,
    isInitial: false,
    isFinal: false,
  },
  {
    id: 5,
    name: "Function: 5",
    equation: "",
    outputUser: {
      id: 3,
      name: "Function: 3",
    },
    input: null,
    isInitial: false,
    isFinal: false,
  },
];
