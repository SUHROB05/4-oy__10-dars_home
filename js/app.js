// masalalarda foydalanuvchidan malumot olish yozilmagan shu sababli menham olib o'tirmadim 
// yani sonlarni foydalanuvchi kiritsin diyilmagan





////////////////////////////////////////////////  1  M  /////
function Triangle(son1) {
    let perimetri = son1 * 3;
    let yuzasi = (son1 * son1 * Math.sqrt(3)) / 4;

    console.log("Teng yonli uchburchakning perimetri: ", perimetri);
    console.log("Yuzasi: ", yuzasi);

    return { perimetri, yuzasi };
}

console.log(Triangle(10));
console.log(Triangle(50));
console.log(Triangle(7));



////////////////////////////////////////////////  2  M  /////
function InvertDigit(son) {
    let teskari = Number(String(son).split('').reverse().join(''));
    return teskari;
}

console.log(InvertDigit(123));
console.log(InvertDigit(4567));
console.log(InvertDigit(890));



////////////////////////////////////////////////  3  M  /////

function DigitCountSum(son) {
    let raqamlar = String(son).split('').map(Number);
    let raqamSoni = raqamlar.length;
    let raqamYigindisi = raqamlar.reduce((sum, num) => sum + num, 0);
    return { raqamSoni, raqamYigindisi };
}


console.log(DigitCountSum(12345));
console.log(DigitCountSum(987));



////////////////////////////////////////////////  4  M  /////

function QuadraticRoots(a, b, c) {
    let D = b * b - 4 * a * c;
    if (D > 0) return 2;
    if (D === 0) return 1;
    return 0;
}

console.log(QuadraticRoots(1, -3, 2));
console.log(QuadraticRoots(1, -2, 1));
console.log(QuadraticRoots(1, 0, 1));



////////////////////////////////////////////////  5  M  /////

function Even(k) {
    return k % 2 === 0;
}


console.log(Even(4)); 
console.log(Even(7));
console.log(Even(10));


////////////////////////////////////////////////  6  M  /////

function IsPowerN(k, n) {
    if (k <= 0 || n <= 0) return false;
    while (k % n === 0) {
        k /= n;
    }
    return k === 1;
}


console.log(IsPowerN(27, 3)); 
console.log(IsPowerN(16, 2)); 
console.log(IsPowerN(20, 3)); 



////////////////////////////////////////////////  7  M  /////

function IncTime(h, m, s, t) {
    let totalSeconds = h * 3600 + m * 60 + s + t; 
    let newH = Math.floor((totalSeconds / 3600) % 24); 
    let newM = Math.floor((totalSeconds % 3600) / 60); 
    let newS = totalSeconds % 60; 
    return { newH, newM, newS };
}


console.log(IncTime(23, 59, 50, 15)); 
console.log(IncTime(12, 45, 30, 3600)); 

////////////////////////////////////////////////  8  M  /////
