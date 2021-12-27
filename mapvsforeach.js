const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let res = numbers.forEach((n,i)=>{
    if(n % 2 === 0) {
        console.log(`Eve number = ${n}`);
        n = n * 2; // try to modify the original value from the array
        return n;
    }
});

console.log(`Array with event number =  ${res}`);
console.log(`Original Array is = ${numbers}`);


let res1 = numbers.map((n,i)=>{
    if(n % 2 === 0) {
        console.log(`Eve number = ${n}`);
        n = n * 2; // try to modify the original value from the array
        return n;
    }
});

console.log(`Array with event number =  ${res1} an length of res1 = ${res1.length}`);
console.log(`Original Array is = ${numbers} and length of numbers = ${numbers.length}`);

let res2 = numbers.filter((n,i)=>{
    if(n % 2 === 0) {
        console.log(`Eve number = ${n}`);
        n = n * 2; // try to modify the original value from the array
        return n;
    }
});

console.log(`Array with event number =  ${res2} an length of res1 = ${res2.length}`);
console.log(`Original Array is = ${numbers} and length of numbers = ${numbers.length}`);