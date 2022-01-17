import { useEffect, useState } from 'react';

/* FIXME
  - [ ] apodData, data, date 등 depth가 조금 깊고, 이름이 혼동됨. 이해하기 쉽도록 변경 가능해보임
*/

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

      setIsGetApodLoading(false);
      setIsGetApodLoaded(true);

      const data = await response.json();
      setData(data);
    };

    getApod();
  }, [date]);

  return { isGetApodLoading, isGetApodLoaded, data };
};

export default useGetApod;
