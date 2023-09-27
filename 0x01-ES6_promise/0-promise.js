function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Perform your asynchronous operation here
    // For example, making an API request using fetch
    fetch('https://api.example.com/data')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('API request failed');
        }
      })
      .then(data => {
        resolve(data); // Resolve the Promise with the fetched data
      })
      .catch(error => {
        reject(error); // Reject the Promise with an error if something goes wrong
      });
  });
}
