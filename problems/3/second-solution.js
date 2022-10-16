const solution = (s) => {
    let subStr = "";
    let subSet = new Set()
    let maxL = 0;
    for (let i = 0; i < s.length; i++) {
        subStr += s[i];
        subSet.add(s[i]);
        if (subStr.length === subSet.size) {
            maxL = Math.max(maxL, subStr.length);
        }
        while (subStr.length !== subSet.size) {
            const shifted = subStr.split("").shift();
            shifted !== s[i] ? subSet.delete(shifted) : null;
            subStr = subStr.slice(1); 
        }
    }
    return maxL;
};

export default solution;