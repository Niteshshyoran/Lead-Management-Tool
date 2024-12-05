const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Parse the response body
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch data:', error);
      // Handle the error (e.g., show a message to the user)
    }
  };
  