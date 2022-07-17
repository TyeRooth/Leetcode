//Recursive and takes adv. of undefined property to take care of base cases.
// Run times (ms): 57, 81, 96, 89, 54   AVG = 75.4
function generate (numRows) {
    if (numRows < 1 || numRows > 30 || typeof(numRows) !== "number") {
        return 'ERROR';
    };
    let output = [];
    createRow(output);
    function createRow (prevRow) {
        if (prevRow.length === numRows) {
            return;
        }
        let row = [];
        for (let i = 0; i <= prevRow.length; i++) {
            if (prevRow[i] === undefined || prevRow[i - 1] === undefined) {
                row.push(1);
            } else {
                row.push(prevRow[i] + prevRow [i - 1]);
            }
        }
        output[prevRow.length] = row;
        createRow(row);
    }
    return output;
}
export { generate };