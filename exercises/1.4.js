const getSumOfArray = (array) => array.reduce((acc, num) => acc + num, 0);

const getMultOfArray = (array) => array.reduce((acc, num) => acc * num, 1);

export const getSumAndMultOfArray = (array) => {
    const sum = getSumOfArray(array);
    const mult = getMultOfArray(array);
    return { sum, mult };
}