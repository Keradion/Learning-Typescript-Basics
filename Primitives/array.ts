// Construct an array of Type number

// Option-1

const ageOfStudents: number[] = [25, 35, 56, 66];

// Paramter age type number and index type number

ageOfStudents.forEach((age: number, index: number) => {
  console.log(age);
});

console.log('end ----------------');

// Option-2

const ageOfStudents2: Array<number> = [35, 65, 65, 77];

// Typescript infer types of age and index varables

ageOfStudents2.forEach((age, index) => {
  console.log(age);
});

