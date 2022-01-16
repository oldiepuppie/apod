import { formatInTimeZone } from 'date-fns-tz';

const getDateTodayEST = () => {
  return formatInTimeZone(new Date(), 'America/New_York', 'yyyy-MM-dd');
};

export default getDateTodayEST;
