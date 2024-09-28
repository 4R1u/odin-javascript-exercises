const sumAll = function(start, end) {
    let sum = 0;
    if (start < 0 || end < 0
        || !Number.isInteger(start) || !Number.isInteger(end)
    ) {
        return "ERROR";
    }
    let oldStart = start;
    start = (start <= end) ? start : end;
    end = (oldStart <= end) ? end : oldStart;
    for (let i = start; i <= end; ++i) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
