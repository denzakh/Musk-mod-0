const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getUnsortedArr = (n, min, max) => {
    const arr = new Array(n);
    arr.fill(0, 0, n);

    return arr.map((item) => getRandom(min, max));
};

const bubblesort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            let a = arr[j];
            let b = arr[j + 1];

            if (a > b) {
                arr[j] = b;
                arr[j + 1] = a;
            }
        }
    }
    return arr;
};

const main = () => {
    const unsorted = getUnsortedArr(100000, 1, 100);
    const t0 = performance.now();
    const sorted = bubblesort(unsorted);
    const t1 = performance.now();

    const ms = ((t1 - t0) / 1000).toFixed(0);
    console.log(
        `El algoritmo bubblesort ha tardado ${ms} segundos en ordenar ${unsorted.length} elementos.`,
    );
};

main();
