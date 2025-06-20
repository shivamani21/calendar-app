import { useState, useEffect } from 'react';
import { getNextMonth, getPreviousMonth } from '../utils/dateUtils';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import eventsData from '../data/events.json';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    setEvents(eventsData);
  }, []);
  
  const handlePreviousMonth = () => {
    setCurrentDate(getPreviousMonth(currentDate));
  };
  
  const handleNextMonth = () => {
    setCurrentDate(getNextMonth(currentDate));
  };
  
  return (
    <div className="calendar-container">
      <CalendarHeader
        currentDate={currentDate}
        onPreviousMonth={handlePreviousMonth}
        onNextMonth={handleNextMonth}
      />
      
      <CalendarGrid
        currentDate={currentDate}
        events={events}
      />
    </div>
  );
};

export default Calendar;