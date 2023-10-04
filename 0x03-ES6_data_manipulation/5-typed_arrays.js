// This function creates an Int8 TypedArray with the given 'length,' sets the value at the specified 'position,' and returns a DataView of the TypedArray.
const createInt8TypedArray = (length, position, value) => {
  // Check if 'position' is outside the valid range (greater than or equal to 'length').
  if (position >= length) {
    // If 'position' is outside the valid range, throw an error.
    throw Error('Position outside range');
  }

  // Create an ArrayBuffer with the specified 'length.'
  const buffer = new ArrayBuffer(length);

  // Create an Int8Array view of the ArrayBuffer.
  const view = new Int8Array(buffer);

  // Set the value at the specified 'position' in the Int8Array.
  view[position] = value;

  // Return a DataView of the ArrayBuffer.
  return new DataView(buffer);
};

export default createInt8TypedArray;
