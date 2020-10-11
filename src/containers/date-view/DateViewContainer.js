import { Box, DateInput } from 'grommet';
import React, { useState } from 'react';
import APOD from './../../components/date-view/APOD';
import useGetApod from './../../hooks/useGetApod';
import APODModal from './../../components/date-view/APODModal';

const DateViewContainer = () => {
  const [isoDate, setIsoDate] = useState(new Date().toISOString());

  // 날짜 입력
  const onDateInputChange = (event) => {
    const nextIsoDate = event.value;
    setIsoDate(nextIsoDate);
  };

  const dateInstance = new Date(isoDate);
  // 날짜를 데이트 형식으로 변환

  const yy = dateInstance.getFullYear();
  const mm = dateInstance.getMonth() + 1 >= 10 
            ? dateInstance.getMonth() + 1
            : `${ '0' + (dateInstance.getMonth() + 1) }`;
  const dd = dateInstance.getDate() >= 10
            ? dateInstance.getDate() -1
            : `${ '0' + (dateInstance.getDate()-1) }`;
  // 날짜를 YY-MM-DD로 표시하기 위한 변수 할당
  // time zone 맞추기 필요 : 일단 day에 -1
  
  const dateForApod = `${yy}-${mm}-${dd}`;
  // YY-MM-DD

  // useGetApod start
  const apodData = useGetApod(dateForApod);
  // useGetApod end

  
  return (
    <div>
      <Box align='center' pad='large' background='dark-2'>
        <Box width='medium' background='light-1'>
          <DateInput format='mm/dd/yyyy' value={isoDate} onChange={onDateInputChange} />
        </Box>
      </Box>
      <Box align='center' pad='large' background='dark-2'>
        <APODModal 
        date={apodData.data.date}
        explanation={apodData.data.explanation}
        title={apodData.data.title}
        url={apodData.data.url}
        />
      </Box>
    </div>
  );
};

export default DateViewContainer;
