const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    else if (num == 0) return 0;
    else if (num <= 2) return 1;
    let a = 1, b = 1;
    for (let i = 0; i < num - 2; ++i) {
        // nums.push(
        //     nums[nums.length - 1]
        //     + nums[nums.length - 2]
        // );
        const oldB = b;
        b = a + b;
        a = oldB;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
