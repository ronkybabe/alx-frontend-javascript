// Define a function called getStudentsByLocation that takes two parameters: 'students' and 'city'.
const getStudentsByLocation = (students, city) => {
  // Check if the 'students' parameter is not an array. If it's not an array, return an empty array.
  if (!Array.isArray(students)) {
    return [];
  }
  // Use the 'filter' method to create a new array containing only the 'student' objects with a 'location' property matching the 'city' parameter.
  return students.filter((student) => student.location === city);
};

// Export the getStudentsByLocation function as the default export of this module.
export default getStudentsByLocation;

