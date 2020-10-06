import React from 'react';
import useGetApod from './hooks/useGetApod';

const test_data = useGetApod('2019-12-31');
console.log(test_data);
<Box height='small' width='small'>
  <Image fit='cover' src={test_data.data.url}></Image>
</Box>;

export default APOD;
