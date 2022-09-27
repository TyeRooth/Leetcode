const validPalindrome = (s) => {
    const alphaNumStr = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let reverseArray = [];
    for (let i = 0; i < alphaNumStr.length; i++) {
        reverseArray.push(alphaNumStr[alphaNumStr.length - 1 - i]);
    };
    if (reverseArray.join("") === alphaNumStr) {
        return true;
    }
    return false;
};

export default validPalindrome;