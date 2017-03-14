function getRandomNumber(from, to) {
    return Math.round(from + Math.random()*(to - from));
}

function generateArray(k) {
    var length = Math.round(Math.random() * k),
        arr = new Array(length),
        limits=requestLimits();
    for (var i = 0; i < length; i++) {
        arr[i]=getRandomNumber(limits.from, limits.to);
    }
    return arr;
}

function requestValidNumber (message, nonPositive) {
    var length;
    do {
        length = parseInt(prompt(message));
    } while ((nonPositive ? false : length <= 0) || isNaN(length));
    return length;
}

function requestLimits() {
    var from = requestValidNumber('введите от:', true),
        to;
    do {
        to = requestValidNumber ('введите до:', true);
    } while(to <= from);
    return {
        from: from,
        to: to
    };
}

var data = generateArray(requestValidNumber('Введите максимальную длину массива'));

console.log(data);

function sortArr(Array) {
    var temp=Number;
    for (var i = 0; i < Array.length ; i++) {
        for (var j = Array.length - 1; j > i; j--) {
            if (Array[j] < Array[j-1]){
                temp = Array[j];
                Array[j] = Array[j-1];
                Array[j-1] = temp;
            }
        }
    }
    return Array;
}

console.log(sortArr(data));
