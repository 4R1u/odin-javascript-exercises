const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    else if (num == 0) return 0;
    else if (num <= 2) return 1;
    let nums = [1,1];
    for (let i = 0; i < num - 2; ++i) {
        nums.push(
            nums[nums.length - 1]
            + nums[nums.length - 2]
        );
    }
    return nums[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
