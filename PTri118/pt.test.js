//import { generate } from "./first-solution-iteration";
import { generate } from "./second-solution";

test('length of output array is equal to numRows', () => {
    expect(generate(2).length).toBe(2);
});

//Constraints
test('Output is ERROR if numRows is not between 1-30', () => {
    expect(generate(-1)).toBe("ERROR");
    expect(generate(31)).toBe("ERROR");
    expect(generate('test')).toBe("ERROR");
});

test('One row has a single array with a single item of 1', () => {
    expect(generate(1)).toStrictEqual([[1]]);
});

test('Correct output for numRows = 5', () => {
    const output = [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]];
    expect(generate(5)).toStrictEqual(output);
});

test('Max row begins and ends with 1', () => {
    const lastRow = generate(30)[29];
    expect(lastRow[0]).toBe(1);
    expect(lastRow[lastRow.length - 1]).toBe(1);
});

test('Value equals [same index] + [same index - 1] from previous row', () => {
    const output = generate(30);
    const value = output[29][20];
    //These are from the previous row and should make up the value
    const sameIndex = output[28][20];
    const oneDownIndex = output[28][19];
    expect(value).toBe(sameIndex + oneDownIndex);
})