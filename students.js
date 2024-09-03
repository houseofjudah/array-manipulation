
  // Create an array of objects representing students
  const students = [
    { name: 'Judah Onunkwor', age: 20, grade: 'A' },
    { name: 'Jane Dije', age: 22, grade: 'B' },
    { name: 'Kemi Smith-Ade', age: 21, grade: 'A' },
    { name: 'Ezekiel Halaand', age: 19, grade: 'C' },
    { name: 'Joshua Eddy', age: 23, grade: 'B' },
  ];
  
  // Function to filter students by grade
  function filterByGrade(students, grade) {
    return students.filter((student) => student.grade === grade);
  }
  
  // Function to calculate average age of students
  function averageAge(students) {
    return students.reduce((sum, student) => sum + student.age, 0) / students.length;
  }
  
  // Test the functions
  console.log('Original Students Array:');
  console.log(students);
  
  console.log('Filtering by Grade A:');
  const gradeAStudents = filterByGrade(students, 'A');
  console.log(gradeAStudents);
  
  console.log('\nFiltering by Grade B:');
  const gradeBStudents = filterByGrade(students, 'B');
  console.log(gradeBStudents);
  
  console.log('\nAverage Age of All Students:');
  const averageAgeAll = averageAge(students);
  console.log(averageAgeAll);
  
  console.log('\nAverage Age of Grade A Students:');
  const averageAgeGradeA = averageAge(gradeAStudents);
  console.log(averageAgeGradeA);
