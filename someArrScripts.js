const list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: {
                value: 4,
                rest: null
            }
        }
    }
};

function arrayToList(array) {
    const result = {};
    let counter = 0;

    const processArray = (res) => {
        res.value = array[counter];
        res.rest = { value: array[counter + 1], rest: null };
        counter++;

        if (counter !== array.length - 1) {
            processArray(res.rest);
        }

        return res;
    };

    processArray(result);

    return result;
}

const arr = [1, 2, 3, 4];

// console.log(arrayToList(arr));

const arrayFromList = (list) => {
    let result = [];

    const handleList = (handledList) => {
        const value = handledList["value"];
        const rest = handledList["rest"];

        result.push(value);

        if (rest !== null) {
            handleList(rest);
        }
    };

    handleList(list);

    return result;
};

// console.log(arrayFromList(arrayToList(arr)));

function prepend(element, list) {
    return { value: element, rest: { ...list } };
}

prepend("el", arrayToList(arr));

function nth(list, position) {
    let counter = 0;

    function openList(sublist) {
        counter++;
        if (counter === position + 1) {
            return sublist?.value ?? undefined;
        } else {
            return openList(sublist?.rest) ?? undefined;
        }
    }

    return openList(list);
}

// console.log(nth(prepend("el", arrayToList(arr)), 2));

const first_obj = { a: "1", b: "2", c: { value: "8" } };
const second_obj = { a: "1", b: "2", c: { value: "8" } };

const deepEqual = (first, second) => {
    let result = true;
    const arr_1 = [];
    const arr_2 = [];

    const deepReduce = (mainObj, processedArray) => {
        for (let i = 0; i < Object.keys(mainObj).length; i++) {
            const objectValue = (obj) => Object.values(obj)[i];
            if (typeof objectValue(mainObj) === "object") {
                deepReduce(objectValue(mainObj), processedArray);
            } else {
                processedArray.push(objectValue(mainObj));
            }
        }
    };
    deepReduce(first, arr_1);
    deepReduce(second, arr_2);

    for (let i = 0; i < arr_1.length; i++) {
        if (arr_1[i] !== arr_2[i]) result = false;
    }
    return result;
};

//console.log(deepEqual(first_obj, second_obj));
