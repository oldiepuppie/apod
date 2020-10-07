import React from 'react';
import APOD from './components/date-view/APOD';
// import useGetApod from './hooks/useGetApod';

const DateViewContainer = () => {
  const [isoDate, setIsoDate] = useState(new Date().toISOString());
  const [isGetApodLoading, setIsGetApodLoading] = useState(false);
  const [isGetApodLoaded, setIsGetApodLoaded] = useState(false);
  const [apodData, setApodData] = useState([]);

  const onDateInputChange = (event) => {
    const nextIsoDate = event.value;
    setIsoDate(nextIsoDate);
  };

  useEffect(() => {
    if (!isoDate) return;

    const getApod = async () => {
      setIsGetApodLoading(true);
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${date}`
      );
      const apodData = await response.json();

      setIsGetApodLoading(false);
      setIsGetApodLoaded(true);
      setApodData(apodData);
    };

    getApod();
  }, [isoDate]);

  // apodData = { isGetApodLoading, isGetApodLoaded, data }

  return (
    <div>
      <dateInput />
      {isGetApodLoading ? null : (
        <APOD
          date={apodData.data.date}
          explanation={apodData.data.explanation}
          media_type={apodData.data.media_type}
          title={apodData.data.title}
          url={apodData.data.title}
        />
      )}
    </div>
  );
};

export default DateViewContainer;
