import React from 'react';
import APOD from './components/date-view/APOD';
import useGetApod from './hooks/useGetApod';

const DateView = () => {
  const [isoDate, setIsoDate] = useState(new Date().toISOString());
  const [isGetLoading, setIsGetLoading] = useState(false);
  const [isGetLoaded, setIsGetLoaded] = useState(false);
  const [apodData, setApodData] = useState([]);

  const onDateInputChange = (event) => {
    const nextIsoDate = event.value;
    setIsoDate(nextIsoDate);
  };

  const dateForApod = `${isoDate.getFullYear()}-${isoDate.getMonth() + 1}-${isoDate.getDate()}`;
  const apodData = useGetApod(dateForApod);

  return (
    <div>
      <dateInput />
      <APOD
        date={apodData.props.date}
        explanation={apodData.props.explanation}
        media_type={apodData.props.media_type}
        title={apodData.props.title}
        url={apodData.props.title}
      />
    </div>
  );
};

export default DateView;
