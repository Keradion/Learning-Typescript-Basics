// Specify the keys and their respective types

const student: { name: string, age: number, status: boolean, subjects: Array<string>, grade: any, payment: string | number}= {
  name: 'Daniel Shitaye Berihun',
  age: 25,
  status: true,
  grade: 'grade -9',
  payment: 2005,
  subjects: ['Mathematics', 'Biology', 'Physics']
}

console.log(student);