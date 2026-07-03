//data recovery
let L = 10;
let R = 20;
let count = 0;
for (let i = L; i <= R; i++) {
    let str = i.toString();
    let unique = new Set(str);
    if (str.length === unique.size) {
        count++;
    }
}
if (count === 0) {
    console.log("NoUnique Number");
} else {
    console.log(count);
}

//employee id verification


let S = "emp123id4567code89server678";
let num = "";
let max = -1;
for (let i = 0; i < S.length; i++) {
    if (S[i] >= '0' && S[i] <= '9') {
        num += S[i];
    } else {
        if (num !== "") {
            if (!num.includes('9')) {
                max = Math.max(max, Number(num));
            }
            num = "";
        }
    }
}
if (num !== "") {
    if (!num.includes('9')) {
        max = Math.max(max, Number(num));
    }
}
console.log(max);