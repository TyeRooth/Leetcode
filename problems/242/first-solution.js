const validAnagram = (s, t) => {
    if(s.split('').sort().join() === t.split('').sort().join()) {return true;}
    return false;
};

export default validAnagram;