const add = (numbers) => {
    if (!numbers) return 0
    else if (numbers.length == 1) return parseInt(numbers);

    const formattedNums = numbers.replace(/\n/g, ",");
    const numArray = formattedNums.split(",");

    return numArray.reduce((sum, current) => sum + parseInt(current || 0), 0);
}

module.exports = add;