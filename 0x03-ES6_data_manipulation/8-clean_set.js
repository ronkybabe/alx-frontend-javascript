// Define a function named cleanSet that takes a Set and a startString as parameters
const cleanSet = (set, startString) => {
  // Initialize an empty array to store modified strings
  const arr = [];

  // Check if startString is provided and is a string
  if (startString && typeof startString === 'string') {
    // Loop through each item in the Set
    for (const item of set) {
      // Check if the item is not undefined and starts with the provided startString
      if (item && item.startsWith(startString)) {
        // Remove the startString from the beginning of the item and push it to the array
        arr.push(item.slice(startString.length));
      }
    }
  }

  // Join the modified items in the array using hyphens and return the resulting string
  return arr.join('-');
};

// Export the cleanSet function as the default export
export default cleanSet;
