const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getUnsortedArr = (n, min, max) => {
    const arr = new Array(n);
    arr.fill(0, 0, n);

    return arr.map((item) => getRandom(min, max));
};

const quicksort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[0];

    const left = [];
    const right = [];
    for (let i = 1; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
    const recursiveResult = quicksort(left).concat(pivot, quicksort(right));
    return recursiveResult;
};

const main = () => {
    const unsorted = getUnsortedArr(100000, 1, 100);
    const t0 = performance.now();
    const sorted = quicksort(unsorted);
    const t1 = performance.now();

    const ms = ((t1 - t0) / 1000).toFixed(1);
    console.log(
        `El algoritmo quicksort ha tardado ${ms} segundos en ordenar ${unsorted.length} elementos.`,
    );
};

main();
