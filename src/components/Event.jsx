const Event = ({ event, hasConflict, isCompact = false }) => {
  const eventClass = `event ${hasConflict ? 'conflict' : ''} ${isCompact ? 'compact' : ''}`;
  const duration = event.endTime ? 
    `${event.startTime} - ${event.endTime}` : 
    event.startTime;
  
  const eventStyle = {
    '--event-color': event.color || '#1976d2',
    backgroundColor: event.color || '#1976d2'
  };
  
  return (
    <div 
      className={eventClass} 
      style={eventStyle}
      title={`${event.title} (${duration})`}
    >
      <div className="event-content">
        <span className="event-title">{event.title}</span>
        {!isCompact && (
          <span className="event-time">{event.startTime}</span>
        )}
      </div>
    </div>
  );
};

export default Event;