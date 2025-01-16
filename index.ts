// Create an array with 3 students names, after that create a function that which
// takes 2 parameters (allStudents: string[], studentName: string) itrate over all
// students and find that specific user "studentName".



// --Data Structure: Array
const studentsData: string[] = ['John', 'Jane', 'Doe'];

// --Algorithm for finding a specific student|user in the array
const findStudent = (allStudents: string[], studentName: string) => {
  for(let i=0; i<allStudents.length; i++) {
    if(allStudents[i] === studentName) {
      console.log(`Student found ${studentName} at index ${i}`);
      return i;
    }
  };
  console.log(`Student not found`);
  return undefined;
};

findStudent(studentsData, 'Jane');
console.log('End of the program');