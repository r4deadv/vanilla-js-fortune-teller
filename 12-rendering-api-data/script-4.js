// Basic Syntax
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    // The API call was successful!
    console.log(response);
  })
  .catch(function (error) {
    // There was an error
    console.warn(error);
  });

// Getting JSON
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    // The API call was successful!
    return response.json();
  })
  .then(function (data) {
    // This is the JSON from our response
    console.log(data);
  })
  .catch(function (error) {
    // There was an error
    console.warn(error);
  });

// Getting text
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    // The API call was successful!
    return response.text();
  })
  .then(function (data) {
    // This is the JSON from our response
    console.log(data);
  })
  .catch(function (error) {
    // There was an error
    console.warn(error);
  });
