// Wait for multiple APIs to resolve
/*Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts'),
      fetch('https://jsonplaceholder.typicode.com/users')
    ]).then(function (responses) {
      console.log(responses);
    });*/

// Get the data from the responses
Promise.all([
  fetch("https://jsonplaceholder.typicode.com/posts"),
  fetch("https://jsonplaceholder.typicode.com/users"),
])
  .then(function (responses) {
    // Get a JSON object from each of the responses
    return Promise.all(
      responses.map(function (response) {
        return response.json();
      })
    );
  })
  .then(function (data) {
    // You would do something with both sets of data here
    console.log(data);
  })
  .catch(function (error) {
    // if there's an error, log it
    console.log(error);
  });
