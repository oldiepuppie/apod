import React from 'react';
import { Box } from 'grommet';

const APODModal = ({ title, date, explanation, closeModal }) => {

  return (
    <div>
      <Box>{title}</Box>
      <Box>{date}</Box>
      <Box>{explanation}</Box>
      <Box>{closeModal}</Box>
    </div>
  );
};

export default APODModal;