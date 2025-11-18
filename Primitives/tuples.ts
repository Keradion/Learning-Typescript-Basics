// The tupel is fixed size of 3
// and the types of the 3 elements are specified as string number string

const studentData: [string, number, string] = ['Daniel', 12, 'Male'];

console.log(studentData);

console.log(studentData[0]);
console.log(studentData[1]);
console.log(studentData[2]);

/**
 * Lets simulate setting a wrong type on a positon 
 * 
 * const data: [number, boolean, string] = [23, true, false];
 * 
 * error: boolean is not assignable to string.
 * 
 **/ 


