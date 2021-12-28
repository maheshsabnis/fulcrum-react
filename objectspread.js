let arr = [10,20];
console.log(`Array = ${arr}`);

// enhance the same 'arr' object by spreading it with new values in it
arr = [...arr,30,40,50];
console.log(`Array after the spread = ${arr}`);

// lets do it for Complex JSON objects

let obj = {x:10, y:20};
console.log(`Obj = ${JSON.stringify(obj)}`);
// Lets spread obj by adding new properties in it
obj = {...obj, z:30};
console.log(`Obj after spread = ${JSON.stringify(obj)}`);
// Lets try to modify an existing property value of obj
obj = {...obj, x:100};
console.log(`Obj after spread with exiting property modification = ${JSON.stringify(obj)}`);

// Reading object properties using 'Object' class
console.log(`Properties of 'obj' = ${Object.keys(obj)}`); 
console.log(`Values of properties 'obj' = ${Object.values(obj)}`); 
