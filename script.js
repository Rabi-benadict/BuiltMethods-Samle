// Math methods // 
Math.arm = function (input) {
    var final_arr = frag(input);
    arr_len = final_arr.length;

    var output = armstrongNum(final_arr);
    console.log(output);
    if (input == output) {
        console.log("Give number is an Armstrong number");
    }
    else {
        console.log("Given number is not an Armstrong number");
    }

    function frag(inputNum) {
        var final = [];
        while (inputNum >= 1) {
            final.push(inputNum % 10);
            inputNum = Math.floor(inputNum / 10);
        }
        return final;
    }

    function armstrongNum(input) {
        var answer = 0;
        for (i = 0; i < arr_len; i++) {
            answer += input[i] ** arr_len;
        }
        return answer;
    }
}

const Number = function () { }

Number.isEven = function (input) {
    if (typeof a == 'number') {
        return (Number.lastCharacterOf(input) % 2 == 0);
    }
    return NaN;
}

Number.isOdd = function (input) {
    if (typeof a == 'number') {
        return !(Number.lastCharacterOf(input) % 2 == 0);
    }
    return NaN;
}


Number.lastCharacterOf = function (num) {
    let len = (num + "").length;
    return (num + "").charAt(len - 1);
}


Number.charAt = function (num, index) {
    var target = num;
    let len = (target + "").length;
    if ((index > (len))) {
        console.error("Index out of bounds.");
        return;
    }

    if (index >= 0) {
        return target.charAt(index);
    }
    else if (index < 0 && Math.abs(index) <= len) {
        return target.charAt(len + index);
    }
    else {
        console.warn("Index out of bounds.");
    }
}

Number.isPrime = function (num) {
    if (input == 1) {
        console.warn("Neither prime nor composite.");
        return;
    }
    if (input <= 3) {
        return true;
    }
    for (let i = 2; i < Math.sqrt(input); i++) {
        if (input % i == 0) {
            return false;
        }
    }
    return true;
}

Number.printPrime = function (input) {
    if ((typeof input) != 'number') return NaN;
    var primeLst = [];
    var inputLmtForPrime = Number(document.getElementById("primeLmt").value);
    for (let i = 2; i <= inputLmtForPrime; i++) {
        if (!isPrime(i)) {
            continue;
        }
        console.log(i);
        primeLst.push(i);
    }
    return primeLst;
}


const Pattern = function () { };

Pattern.pOne = function (lmt) {

    for (let i = lmt, k = 0; i >= 0; i--) {
        var line = "";
        for (let j = 1; j <= k; j++) {
            line = line + ` ${j}`;
        }
        k = Number(k + 1);
        console.log(line);
    }

}

Pattern.pTwo = function (lmt) {
    for (let i = 0, k = lmt; i < lmt; i++) {
        var line = "";
        for (let j = 1; j <= k; j++) {
            line = line + ` ${j}`;
        }
        console.log(line);
        k = Number(k - 1);
    }
}

Pattern.pThree = function (lmt) {
    var line2 = "";
    for (let j = 1; j <= lmt; j++) {
        line2 = line2 + ` ${j}`;
        console.log(line2);
    }
    for (let k = lmt - 1; k >= 1; k--) {
        line2 = "";
        for (let i = 1; i <= k; i++) {
            line2 = line2 + ` ${i}`;
        }
        console.log(line2);
    }
}

Pattern.pFour = function () {
    var line3 = "";
    for (let j = 1; j <= lmt; j++) {
        if (j < 10) {
            line3 = line3 + ` 0${j}`;
            console.log(line3);
        }
        else {
            line3 = line3 + ` ${j}`;
            console.log(line3);
        }
    }
}









