// This is treated as successful, even though the response is a 404
fetch("https://jsonplaceholder.typicode.com/postses")
  .then(function (response) {
    // The API call was successful
    // (wait, it was?)
    console.log(response.status);
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

// This throws an error
fetch("https://jsonplaceholder.typicode.com/postses")
  .then(function (response) {
    // If the response is successful, get the JSON
    if (response.ok) {
      return response.json();
    }

    // Otherwise, throw an error
    throw response.status;
  })
  .then(function (data) {
    // This is the JSON from our response
    console.log(data);
  })
  .catch(function (error) {
    // There was an error
    console.warn(error);
  });

// This also throws an error, but exposes the response body
fetch("https://jsonplaceholder.typicode.com/postses")
  .then(function (response) {
    // If the response is successful, get the JSON
    if (response.ok) {
      return response.json();
    }

    // Otherwise, throw an error
    return response.json().then(function (json) {
      throw json;
    });
  })
  .then(function (data) {
    // This is the JSON from our response
    console.log(data);
  })
  .catch(function (error) {
    // There was an error
    console.warn(error);
  });
