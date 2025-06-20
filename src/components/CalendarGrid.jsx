import { getCalendarDays, getDayNames } from '../utils/dateUtils';
import CalendarDay from './CalendarDay';

const CalendarGrid = ({ currentDate, events }) => {
  const calendarDays = getCalendarDays(currentDate);
  const dayNames = getDayNames();
  
  return (
    <div className="calendar-grid">
      <div className="day-names">
        {dayNames.map(dayName => (
          <div key={dayName} className="day-name">
            {dayName}
          </div>
        ))}
      </div>
      
      <div className="calendar-days">
        {calendarDays.map(day => (
          <CalendarDay
            key={day.toISOString()}
            day={day}
            currentDate={currentDate}
            events={events}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;