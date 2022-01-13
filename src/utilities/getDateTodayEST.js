import { formatInTimeZone } from 'date-fns-tz';

const getDateTodayEST = () => {
  const dateObj = new Date();
  return formatInTimeZone(dateObj, 'America/New_York', 'yyyy-MM-dd');
};

export default getDateTodayEST;
