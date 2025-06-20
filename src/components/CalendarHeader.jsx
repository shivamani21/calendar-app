import { formatMonthYear } from '../utils/dateUtils';

const CalendarHeader = ({ currentDate, onPreviousMonth, onNextMonth }) => {
  return (
    <div className="calendar-header">
      <button 
        className="nav-button" 
        onClick={onPreviousMonth}
        aria-label="Previous month"
      >
        ‹
      </button>
      
      <h2 className="month-year">{formatMonthYear(currentDate)}</h2>
      
      <button 
        className="nav-button" 
        onClick={onNextMonth}
        aria-label="Next month"
      >
        ›
      </button>
    </div>
  );
};

export default CalendarHeader;