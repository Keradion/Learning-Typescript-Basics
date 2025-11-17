// The thing is we have student objects or instances 
// and the object conists multiple keys 
// therfore we need to specifiy the keys Types prior to setting value for a student instance

type Student  = {
  name: string,
  age: number,
  status: boolean,
  subjects: string[],
  grade: string | number,
  payment: string | number
}

// Create student 1

const stu1: Student = {
  name: "Daniel Shitaye",
  age: 19,
  status: true,
  subjects: ['Math', 'Physics'],
  grade: 'grade 12',
  payment: '1500'
}


// Create student 2

const stu2: Student = {
  name: "ayele chamiso",
  age: 56,
  status: false,
  subjects: ['Math', 'Physics'],
  grade: 12,
  payment: 3533
}

// A function that log student object
// Parameter of type Student

const logStudent = (student: Student) => {
  console.log(student);
}

logStudent(stu1);

logStudent(stu2);

// Store the student objects inside an array
// again we specify array of Type Student

const students: Student[] = [stu1, stu2];

// Map takes a paramter of type Student

students.map((student: Student) => {
  console.log(student.name);
})

// A function to add a subject to a student instance and update the price

const update = (student: Student, subject: string, price: number | string)  => {
  
  // Push subject
  
  student.subjects.push(subject);

  // Update Price

  if (typeof student.payment === 'string') {
    student.payment = Number(student.payment) + Number(price);
  } else {
    student.payment = student.payment + 500;
  }

}

//  calling update function 

update(stu1, 'History', 1000);

// Loggig student 1

logStudent(stu1);