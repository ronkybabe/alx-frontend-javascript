function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      // Resolve the promise with a successful response
      const response = {
        status: 200,
        body: 'Success',
      };
      resolve(response);
    } else {
      // Reject the promise with an error message
      const error = new Error('The fake API is not working currently');
      reject(error);
    }
  });
}
