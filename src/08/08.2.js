const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getUnsortedArr = (n, min, max) => {
    const arr = new Array(n);
    arr.fill(0, 0, n);

    return arr.map((item) => getRandom(min, max));
};

const sinDuplicados = (arr1, arr2) => {
    const set2 = new Set(arr2);

    const result = arr1.filter((item) => {
        return !set2.has(item);
    });

    return result;
};

const main = () => {
    const arr1 = getUnsortedArr(5, 1, 10);
    const arr2 = getUnsortedArr(4, 1, 10);

    console.log('arr1: ', arr1);
    console.log('arr2: ', arr2);

    const result = sinDuplicados(arr1, arr2);

    console.log('result:', result);
};

main();
