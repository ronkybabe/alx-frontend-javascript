const getListStudentIds = (array) => {
  // Check if the 'array' parameter is indeed an array.
  if (Array.isArray(array)) {
     // If it is an array, use the 'map' method to extract the 'id' property from each 'student' object in the array.
    return array.map((student) => student.id);
  }
  // If the 'array' parameter is not an array, return an empty array.
  return [];
};

export default getListStudentIds;
