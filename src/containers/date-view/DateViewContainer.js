import { Box, DateInput } from 'grommet';
import React, { useState, useEffect } from 'react';
import useGetApod from './../../hooks/useGetApod';
import ReactLoading from 'react-loading';
import APODContainer from './APODContainer';

const DateViewContainer = () => {
  const [isoDate, setIsoDate] = useState(new Date().toISOString());
  const onDateInputChange = (event) => {
    const nextIsoDate = event.value;
    setIsoDate(nextIsoDate);
  }

  const validateAvailableDateRange = (isoDate) => {
    const minDate = new Date(1995, 5, 16);
    const maxDate = new Date();
    const targetDate = new Date(isoDate);

    return ( targetDate.getTime() >= minDate.getTime() && targetDate.getTime() <= maxDate.getTime()
      ? true : false )
  }

  const getAPODDate = (isoDate) => {
    const dateInstance = new Date(isoDate);
    const yyyy = dateInstance.getFullYear();
    const mm = dateInstance.getMonth() + 1 >= 10 ? dateInstance.getMonth() + 1 : `0${dateInstance.getMonth() + 1}`;
    const dd = dateInstance.getDate() >= 10 ? dateInstance.getDate() - 1 : `0${dateInstance.getDate() - 1}`;

    return `${yyyy}-${mm}-${dd}`;
  }
  
  useEffect(() => {
    if ( !validateAvailableDateRange(isoDate) )
    { alert('Date Range : 1995-06-16 ~ Today') }
  }, [isoDate])

  const apodData = useGetApod(getAPODDate(isoDate))

  // apodData = {isGetApodLoading=true, isGetApodLoaded=false, data}
  // const loading = () =>
  //    isGetApodLoading
  //    ? 로딩 컴포넌트 짠 <Example type='spin' color='#fff' />
  //    : 이미지 로드 // 비워도 되지 않을까?
  // const Example = ({ type, color }) => (
  //   <ReactLoading type={type} color={color} height={667} width={375} />
  // );
  

  return (
    <div>
      <Box align='center' pad='large' background='dark-2'>
        <Box width='medium' background='light-1' round='xsmall'>
          <DateInput format='mm/dd/yyyy' value={isoDate} onChange={onDateInputChange} />
        </Box>
      </Box>

      { apodData.isGetApodLoading 
        ? <Box align='center' pad='large' background='dark-2'>
            <ReactLoading type='spin' color='#fff' />
          </Box>
        : <APODContainer
        title={apodData.data.title}
        date={apodData.data.date}
        explanation={apodData.data.explanation}
        url={apodData.data.url}
        media_type={apodData.data.media_type} />
      }
      
    </div>
  );
};

export default DateViewContainer;
