const add = (numbers) => {
    if (!numbers) return 0
    else if (numbers.length == 1) return parseInt(numbers);

    const numArray = numbers.split(",") 

    return numArray.reduce((sum, current) => sum + parseInt(current), 0)
}

module.exports = add;