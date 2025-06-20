import { 
  format, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval, 
  isSameMonth, 
  isToday, 
  addMonths, 
  subMonths,
  isSameDay,
  parseISO
} from 'date-fns';

export const getCalendarDays = (date) => {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);
  const calendarStart = startOfWeek(monthStart);
  const calendarEnd = endOfWeek(monthEnd);

  return eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd
  });
};

export const formatMonthYear = (date) => {
  return format(date, 'MMMM yyyy');
};

export const formatDay = (date) => {
  return format(date, 'd');
};

export const isCurrentMonth = (day, currentDate) => {
  return isSameMonth(day, currentDate);
};

export const isCurrentDay = (day) => {
  return isToday(day);
};

export const getNextMonth = (date) => {
  return addMonths(date, 1);
};

export const getPreviousMonth = (date) => {
  return subMonths(date, 1);
};

export const isSameDayAs = (date1, date2) => {
  return isSameDay(date1, date2);
};

export const parseEventDate = (dateString) => {
  return parseISO(dateString);
};

export const getDayNames = () => {
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
};