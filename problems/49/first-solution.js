const groupAnagrams = (strs) => {
    let hashSorted = {};
    for (let i = 0; i < strs.length; i++) {
        const sortedStr = strs[i].split("").sort().join("");
        if (hashSorted[sortedStr]) {
            hashSorted[sortedStr].push(strs[i]);
        }
        else {
            hashSorted[sortedStr] = [strs[i]];
        }
    }
    let output = [];
    for (let sortedStr in hashSorted) {
        output.push(hashSorted[sortedStr]);
    }
    return output;
};

export default groupAnagrams;