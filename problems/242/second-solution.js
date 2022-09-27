const validAnagram = (s, t) => {
    // Can be improved by checking for same str lens at the start
    const hashedS = hashLetters(s);
    const hashedT = hashLetters(t);
    let longestWord;
    s.length > t.length ? longestWord = s : longestWord = t;
    for (let i = 0; i < longestWord.length; i++) {
        if (hashedS[longestWord[i]] !== hashedT[longestWord[i]]) {
            return false;
        }
    }
    return true;
};

const hashLetters = (string) => {
    const storedLetters = {};
    for(let i = 0; i < string.length; i++) {
        if(storedLetters[string[i]]) {
            storedLetters[string[i]]++;
        } else {storedLetters[string[i]] = 1}
    }
    return storedLetters;
};

export default validAnagram;