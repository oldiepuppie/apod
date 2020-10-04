import React, { useState, useEffect } from 'react';
// The value is never read - Why??

const useGetApod = (date) => {
  const [isGetApodLoading, setIsGetApodLoading] = useState(true);
  // The value is never read - Why??
  const [isGetApodLoaded, setIsGetApodLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!date) return;

    const getApod = async () => {
      // setIsGetApodLoading(true); //no need to write this again?
      // setIsGetApodLoaded(false); //no need to write this again?
      const response = await fetch(
        'https://api.nasa.gov/planetary/apod?api_key=Dl8DvUKGx1teO8CLLrBhEdseafuTJSwkQZfEXu3L&date=${date}'
      );
      const data = await response.json();

      setIsGetApodLoading(false);
      setIsGetApodLoaded(true);
      setData(data);
    };

    getApod();
  }, [date]);

  return { isGetApodLoaded, data };
};

export default App; // Do I have to use this??
