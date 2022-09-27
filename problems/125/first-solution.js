const validPalindrome = (s) => {
    const alphaNumStr = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    if (alphaNumStr.length % 2 === 1) {
        const midIndex = Math.floor(alphaNumStr.length/2);
        for (let i = 1; i <= midIndex; i++) {
            if (alphaNumStr[midIndex + i] !== alphaNumStr[midIndex - i]) {
                return false;
            }
        }
    }
    if(alphaNumStr.length % 2 === 0) {
        const midRightIndex = alphaNumStr.length/2;
        for (let i = 0; i < midRightIndex; i++) {
            if (alphaNumStr[midRightIndex + i] !== alphaNumStr[midRightIndex - 1 - i]) {
                return false;
            }
        }
    }
    return true;
};

export default validPalindrome;