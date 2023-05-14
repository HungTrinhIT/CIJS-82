import { useEffect, useState } from "react";

// useFetch
// sideEffect: callAPI, setTimeout setInterval, subscribe third parties,...
// customHooks => reuse logic trong 1 component
/* 
  3 vấn đề cần xác định để viết 1 custom hook
  useFetch
  - Logic là gì: gọi API để lấy data về => fetch (JS), GET
  - Input: url
  - Output:
    {
      data,
      isLoading: true | false,
      error: {}
    }
*/

const useFetch = (url, initialValues = []) => {
  // state
  const [data, setData] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log("somethings went wrong:", error);
      setError(error);
      setIsLoading(false);
    }
  };

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;

// Rule of hooks
