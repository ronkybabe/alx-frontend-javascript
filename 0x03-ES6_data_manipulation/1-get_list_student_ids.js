const getListStudentIds = (array) => {
  // Check if the 'array' parameter is indeed an array.
  if (Array.isArray(array)) {
     // Use the 'map' method to extract the 'id' property from each 'student' object in the array.
    return array.map((student) => student.id);
  }
  // Return the empty array.
  return [];
};

export default getListStudentIds;
