import { useState, useCallback } from "react";

const useRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback( async (isPost, taskText, applyData) => {
    setIsLoading(true);
    setError(null);
    try{
      var response=0;
      if(!isPost){
        response = await fetch(
          'https://dev-project-mse-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
        );
      }else{
        response = await fetch(
          'https://dev-project-mse-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
          {
            method: 'POST',
            body: JSON.stringify({ text: taskText }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
      }

      if (!response.ok) {
        throw new Error('Request failed!');
      }
      
      const data = await response.json();
      applyData(data);
    }catch (err){
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);
  return {isLoading, error, sendRequest} 
};

export default useRequest;