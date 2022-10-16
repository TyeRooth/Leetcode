const solution = (s) => {
    let maxL;
    s.length > 0 ? maxL = 1 : maxL = 0;
    const checkWithinSubStr = (char, subStr) => {
        for (let i = 0; i < subStr.length; i++) {
            if (char === subStr[i]) {
                return true;
            }
        }
        return false;
    };
    for (let i = 0; i < s.length; i++) {
        let currSubStr = s[i];
        let j = i + 1;
        while (!checkWithinSubStr(s[j], currSubStr) && j < s.length) {
            currSubStr += s[j];
            maxL = Math.max(currSubStr.length, maxL);
            j++;
        }
    };
    return maxL;
};

export default solution;