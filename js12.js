// Dummy API function that returns a promise
function callDummyAPIPromise() {
    return new Promise((resolve, reject) => {
      // Simulating API call with setTimeout
      setTimeout(() => {
        // Simulating successful API response
        const responseData = { message: "Dummy API call using promises successful" };
        resolve(responseData);
      }, 1000); // Simulating 1 second delay
    });
  }
  
  // Calling the dummy API using promises
  callDummyAPIPromise()
    .then(response => {
      console.log("Promise response:", response);
    })
    .catch(error => {
      console.error("Promise error:", error);
    });
  
  // Dummy API function using async/await
  async function callDummyAPIAsyncAwait() {
    try {
      // Simulating API call with setTimeout
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulating successful API response
          const responseData = { message: "Dummy API call using async/await successful" };
          resolve(responseData);
        }, 1000); // Simulating 1 second delay
      });
      console.log("Async/Await response:", response);
    } catch (error) {
      console.error("Async/Await error:", error);
    }
  }
  
  // Calling the dummy API using async/await
  callDummyAPIAsyncAwait();
  