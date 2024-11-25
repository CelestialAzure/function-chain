


//* Function to validate equation ->
const validateEquation = (equation: string): boolean => {
  if (equation === '') return true;
  
  const cleanEquation = equation.trim();
  

  return cleanEquation.split('').every(char => {
    return (
      char === '+' ||
      char === '-' ||
      char === '*' ||
      char === '/' ||
      char === '^' ||
      char === '(' ||
      char === ')' ||
      char === 'x' ||
      char === ' ' ||
      char ==="." ||
      !isNaN(Number(char))
    );
  });
};

  //* Function to evaluate the equation ->
  const evaluateEquation = (equation: string, input: number|null): number | null => {
    try {
      if(!equation || equation === ''||!input) return null;
      let processedEquation = equation.trim();
      
   
      processedEquation = processedEquation.replace(/(\d)x/g, '$1*x');
      processedEquation = processedEquation.replace(/\^/g, '**');
      
      processedEquation = processedEquation.replace(/x/g, input.toString());
  
      const result = Function(`return ${processedEquation}`)();
      
      if (isNaN(result)) return null;
      return parseFloat(Number(result).toFixed(2));
  
    } catch (error) {
      console.error("Evaluation error:", error);
      return null;
    }
  };
  export {validateEquation , evaluateEquation};