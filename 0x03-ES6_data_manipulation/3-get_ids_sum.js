// This function calculates the sum of student IDs in an array of student objects.
const getStudentIdsSum = (students) => {
  // Check if the input is an array; if not, return an empty array.
  if (!Array.isArray(students)) {
    return [];
  }
  // Use the `reduce` method to accumulate the sum of student IDs, starting from 0.
  return students.reduce((acc, student) => acc + student.id, 0);
};

export default getStudentIdsSum;
