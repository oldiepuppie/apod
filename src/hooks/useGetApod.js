import React, { useState, useEffect } from 'react';

const useGetApod = (date) => {
  const [isGetApodLoading, setIsGetApodLoading] = useState(false);
  const [isGetApodLoaded, setIsGetApodLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!date) return;

    const getApod = async () => {
      setIsGetApodLoading(true);

      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${date}`
      );
      const data = await response.json();

      setIsGetApodLoading(false);
      setIsGetApodLoaded(true);
      setData(data);
    };

    getApod();
  }, [date]);

  return { isGetApodLoading, isGetApodLoaded, data };
};

export default useGetApod;
