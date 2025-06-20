export const parseEventTime = (timeString) => {
  const [hours, minutes] = timeString.split(':').map(Number);
  return hours * 60 + minutes; // Convert to minutes since midnight
};

export const getEventDuration = (startTime, endTime) => {
  return parseEventTime(endTime) - parseEventTime(startTime);
};

export const checkEventOverlap = (event1, event2) => {
  const start1 = parseEventTime(event1.startTime);
  const end1 = parseEventTime(event1.endTime);
  const start2 = parseEventTime(event2.startTime);
  const end2 = parseEventTime(event2.endTime);
  
  return (start1 < end2 && start2 < end1);
};

export const findConflictingEvents = (events) => {
  const conflicts = new Set();
  
  for (let i = 0; i < events.length; i++) {
    for (let j = i + 1; j < events.length; j++) {
      if (checkEventOverlap(events[i], events[j])) {
        conflicts.add(i);
        conflicts.add(j);
      }
    }
  }
  
  return conflicts;
};

export const getEventsForDay = (events, targetDate) => {
  return events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.toDateString() === targetDate.toDateString();
  });
};

export const sortEventsByTime = (events) => {
  return [...events].sort((a, b) => {
    return parseEventTime(a.startTime) - parseEventTime(b.startTime);
  });
};

export const formatTimeRange = (startTime, endTime) => {
  return `${startTime} - ${endTime}`;
};

export const getDurationInMinutes = (startTime, endTime) => {
  return parseEventTime(endTime) - parseEventTime(startTime);
};

export const formatDuration = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  
  if (hours === 0) {
    return `${mins}m`;
  } else if (mins === 0) {
    return `${hours}h`;
  } else {
    return `${hours}h ${mins}m`;
  }
};