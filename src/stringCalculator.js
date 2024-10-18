const add = (numbers) => {
    if (!numbers) return 0
    else if (numbers.length == 1) return parseInt(numbers);

    let delimiter = ","

    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = parts[0].slice(2);
        numbers = parts[1];
    }

    const formattedNums = numbers.replace(/\n/g, delimiter);
    const numArray = formattedNums.split(delimiter);

    const negativeNumbers = numArray.filter(num => parseInt(num) < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`)
    }

    return numArray.reduce((sum, current) => sum + parseInt(current || 0), 0);
}

module.exports = add;