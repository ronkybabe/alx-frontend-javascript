// This function updates the grades of students in a given city with new grades provided in the 'newGrades' array.
const updateStudentGradeByCity = (students, city, newGrades) => {
  // Check if 'students' and 'newGrades' are arrays; if not, return an empty array.
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }
  const studentsByCity = students
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.find((grade) => grade.studentId === student.id);
      return { ...student, grade: grade ? grade.grade : 'N/A' };
    });

  return studentsByCity;
};

export default updateStudentGradeByCity;
