import { Box, DateInput } from 'grommet';
import React, { useState } from 'react';
import APOD from './../../components/date-view/APOD';
import useGetApod from './../../hooks/useGetApod';

const DateViewContainer = () => {
  const [isoDate, setIsoDate] = useState(new Date().toISOString());

  // 날짜 입력
  const onDateInputChange = (event) => {
    const nextIsoDate = event.value;
    setIsoDate(nextIsoDate);
  };

  const dateInstance = new Date(isoDate);
  console.log(dateInstance);
  // 날짜를 데이트 형식으로 변환

  const yy = dateInstance.getFullYear();
  const mm = dateInstance.getMonth() + 1 >= 10 
            ? dateInstance.getMonth() + 1
            : `${ '0' + (dateInstance.getMonth() + 1) }`;
  const dd = dateInstance.getDate() >= 10
            ? dateInstance.getDate()
            : `${ '0' + dateInstance.getDate() }`;
  console.log(yy);
  console.log(mm);
  console.log(dd);
  // 날짜를 YY-MM-DD로 표시하기 위한 변수 할당
  
  const dateForApod = `${yy}-${mm}-${dd}`;
  console.log(dateForApod);
  // 위의 변수를 useGetApod 훅에 사용할 수 있도록 변환

  // useGetApod start
  const apodData = useGetApod(dateForApod);
  console.log(apodData);
  // useGetApod end

  
  return (
    <div>
      <Box align='center' pad='large' background='dark-2'>
        <Box width='medium' background='light-1'>
          <DateInput format='mm/dd/yyyy' value={isoDate} onChange={onDateInputChange} />
        </Box>
      </Box>
      <Box align='center' pad='large' background='dark-2'>
        <APOD
          date={apodData.data.date}
          explanation={apodData.data.explanation}
          media_type={apodData.data.media_type}
          title={apodData.data.title}
          url={apodData.data.url}
        />
      </Box>
    </div>
  );
};

export default DateViewContainer;
