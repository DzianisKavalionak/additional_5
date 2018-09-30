module.exports = function check(str, bracketsConfig) {
    let array = str.split('');
    let i = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] === '(') {
            array.splice(i, 1, 1);
        } else if (array[i] === ')') {
            array.splice(i, 1, 2);
        } else if (array[i] === '[') {
            array.splice(i, 1, 3);
        } else if (array[i] === ']') {
            array.splice(i, 1, 4);
        } else if (array[i] === '{') {
            array.splice(i, 1, 5);
        } else if (array[i] === '}') {
            array.splice(i, 1, 6);
        } else if (array[i] === '|') {
            array.splice(i, 1, 7);
        }
    }

    function sort() {
        for (i = 0; i < array.length; i++) {
            if (array[i] == 1 && array[i + 1] == 2 ||
                array[i] == 3 && array[i + 1] == 4 ||
                array[i] == 5 && array[i + 1] == 6 ||
                array[i] == 7 && array[i + 1] == 7 ||
                array[i] == 8 && array[i + 1] == 8) {
                array.splice(i, 2);
                sort(i = 0);
            } else if (array[0] == 7 && array[array.length - 1] == 7 ||
                array[0] == 8 && array[array.length - 1] == 8) {
                array.splice(array.length - i - 1, 1);
                array.splice(i, 1);
                sort(i = 0);
            }
        }
    }

    sort();
    if (array[0] === undefined) {
        return true;
    } else {
        return false;
    }
}