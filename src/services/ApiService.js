// ApiService.js

const ApiService = {
    async getData() {
      try {
        const response = await fetch('https://fu6hk3qh0f.execute-api.eu-west-3.amazonaws.com/default/frontendTest');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    }
  };

export default ApiService;
