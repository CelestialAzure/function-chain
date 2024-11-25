type Point = {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  };
const  getCurvePath = (line: Point) => {
    const midX = (line.x1 + line.x2) / 2;
    const midY = (line.y1 + line.y2) / 2;
    const curveOffset = 60;

    if (Math.abs(line.y1 - line.y2) < 5) {
      return `M ${line.x1} ${line.y1} 
              Q ${midX} ${line.y1 + curveOffset}, 
              ${line.x2} ${line.y2}`;
    }

    if (Math.abs(line.x1 - line.x2) < 25) {
      return `M ${line.x1} ${line.y1} 
              Q ${line.x1 + curveOffset} ${midY}, 
              ${line.x2} ${line.y2}`;
    }

    //* for diagonal lines 
    return `M ${line.x1} ${line.y1} 
          C ${line.x1} ${line.y1 + 150},  
            ${line.x2} ${line.y2 - 150},  
            ${line.x2} ${line.y2}`;
  };

  export default getCurvePath;