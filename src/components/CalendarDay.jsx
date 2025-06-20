import { formatDay, isCurrentMonth, isCurrentDay } from '../utils/dateUtils';
import { getEventsForDay, sortEventsByTime, findConflictingEvents } from '../utils/eventUtils';
import Event from './Event';

const CalendarDay = ({ day, currentDate, events }) => {
  const dayEvents = getEventsForDay(events, day);
  const sortedEvents = sortEventsByTime(dayEvents);
  const conflictIndices = findConflictingEvents(sortedEvents);
  
  const dayClass = `calendar-day ${
    !isCurrentMonth(day, currentDate) ? 'other-month' : ''
  } ${isCurrentDay(day) ? 'today' : ''}`;
  
  const maxVisibleEvents = 4;
  const visibleEvents = sortedEvents.slice(0, maxVisibleEvents);
  const hiddenEventsCount = sortedEvents.length - maxVisibleEvents;
  
  return (
    <div className={dayClass}>
      <div className="day-number">
        {formatDay(day)}
      </div>
      
      <div className="day-events">
        {visibleEvents.map((event, index) => (
          <Event
            key={`${event.title}-${event.date}-${event.startTime}-${index}`}
            event={event}
            hasConflict={conflictIndices.has(index)}
            isCompact={sortedEvents.length > 3}
          />
        ))}
        
        {hiddenEventsCount > 0 && (
          <div className="more-events">
            +{hiddenEventsCount} more
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarDay;