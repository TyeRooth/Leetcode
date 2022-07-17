//Simple iteration
// Run times (ms): 111, 96, 78, 86, 94   AVG = 93
function generate(numRows) {
    if (numRows < 1 || numRows > 30 || typeof(numRows) !== "number") {
        return 'ERROR';
    }
    let output = [];
    let prevRow = [];
    for (let i = 0; i < numRows; i++) {
        if (i === 0) {
            output.push([1]);
        }
        else if (i === 1) {
            output.push([1, 1]);
            prevRow = [1, 1];
        }
        else {
            let row = [];
            for (let j = 0; j <= prevRow.length; j++) {
                if (j === 0 || j === prevRow.length) {
                    row.push(1);
                }
                else {
                    row.push(prevRow[j] + prevRow[j - 1]);
                }
            }
            output.push(row);
            prevRow = row;
        }
    }
    return output;
  }
export { generate };