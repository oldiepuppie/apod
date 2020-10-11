import { Anchor, Box, DateInput, Grommet, Header, Heading, Main, Image } from 'grommet';
import { grommet } from 'grommet/themes';
import React, { useState } from 'react';
import useGetApod from './hooks/useGetApod'; // APOD

function App() {
  const [date, setDate] = useState(new Date().toISOString());
  const onDateInputChange = (event) => {
    const nextDate = event.value;
    console.log('onDateInputChange', nextDate);
    setDate(nextDate);
  };
  console.log(date);
  // 날짜 선택

  const dateInstance = new Date(date);
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

  // APOD tester start
  const test_data = useGetApod(dateForApod);
  console.log(test_data);
  // APOD tester end

  return (
    <Grommet theme={grommet} full>
      <Header background='dark-1' pad='xsmall' height='xsmall'>
        <Heading level='1' size='small'>
          <Anchor color='accent-3' href='#' label='Astronomy Picture of Day' />
        </Heading>
      </Header>

      <Box align='center' pad='large' background='dark-2'>
        <Box width='medium' background='light-1'>
          <DateInput format='mm/dd/yyyy' value={date} onChange={onDateInputChange} />
        </Box>
      </Box>

      {/* APOD RETURN tester start */}
      <Main full background='dark-2' pad='small'>
        <Box height='small' width='small'>
          <Image fit='cover' src={test_data.data.url}></Image>
        </Box>
      </Main>
      {/* APOD RETURN tester end */}
    </Grommet>
  );
}

export default App;
