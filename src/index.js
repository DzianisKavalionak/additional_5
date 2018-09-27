module.exports = function check(str, bracketsConfig) {
    let config = [['(', ')'], ['|', '|']];
    let array = str.split('');


    let num = [];
    let result = [];
    let i = 0;

    for (i = 0; i < array.length; i++){
        if(array[i] === '('){
            num.push(1);
        } else if(array[i] === ')') {
            num.push(2);
        } else if(array[i] === '[') {
            num.push(3);
        } else if(array[i] === ']') {
            num.push(4);
        } else if(array[i] === '{') {
            num.push(5);
        } else if(array[i] === '}') {
            num.push(6);
        } else if(array[i] === '|') {
            num.push(7);
        }
    }

    for (i = 0; i < num.length; i) {
        if (num[i] === 1 && num[i + 1] === 2 ||
            num[i] === 3 && num[i + 1] === 4 ||
            num[i] === 5 && num[i + 1] === 6) {
            num.splice(i, 2);
            i = 0;
        } else if ( num[i] === 7 && num[num.length - i - 1] === 7){
            num.splice(num.length - i - 1, 1);
            num.splice(i, 1);
            i = 0;
        } else {
            i++;
        }
    }

    if (num[0] === undefined) {
        return true;
    } else {
        return false;
    }

}