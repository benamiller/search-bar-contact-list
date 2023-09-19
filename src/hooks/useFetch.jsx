import { useState, useEffect } from 'react';

function useFetch(url, options) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    apiCall();
  }, []);

  async function apiCall() {
    const response = await fetch(url, options);

    try {
      const resData = await response.json();
      setData(resData);
    } catch (error) {
      setError(error);
    }
  };


  return [data, error];
}

export default useFetch;
