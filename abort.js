let controller; // store the current controller

function fetchData(url) {
  // cancel any previous request
  if (controller) {
    controller.abort();
    console.log("Previous request aborted!");
  }

  // create a new controller for this request
  controller = new AbortController();

  fetch(url, { signal: controller.signal })
    .then((res) => res.json())
    .then((data) => console.log("Data:", data))
    .catch((err) => {
      if (err.name === "AbortError") {
        console.log("Fetch aborted!");
      } else {
        console.error("Fetch error:", err);
      }
    });
}

// Example usage:
fetchData("https://jsonplaceholder.typicode.com/posts/1");

// Quickly call again — cancels the first one
fetchData("https://jsonplaceholder.typicode.com/posts/2");
