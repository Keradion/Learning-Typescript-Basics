// String Annotations

const studentName: string = 'Daniel Shitaye Berihun';
console.log(studentName);

// Number Annotations

const age: number = 24;

console.log(age);

// Boolean Annotations

const statusActive: boolean = true;

console.log(statusActive);

// Let typescript infer the types

let studentStatus = true;

// let studentStatus = 'Daniel' 
// causes an error - ` Tyoe string is not assignable to Type boolean ` so inference works.
