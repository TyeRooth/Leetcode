const topKFrequentElements = (nums, k) => {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            hash[nums[i]]++;
        } else {hash[nums[i]] = 1}
    }
    const sortByCount = (obj) => {
        return Object.entries(obj).sort((a, b) => b[1] - a[1]);
    };
    const ranked = sortByCount(hash);
    let output = [];
    for (let i = 0; i < k; i++) {
        output.push((Number(ranked[i][0])));
    }
    return output;
};

export default topKFrequentElements;