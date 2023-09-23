import React from 'react';

const GlobalContext = React.createContext({
  monthIndex: 2,
  setMonthIndex: (index) => {},
  daySelected: null,
  setDaySelected: (day) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCalEvent: ({ type, payload }) => {},
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => {},
  setLabels: () => {},
  filteredEvents: [],
});

export default GlobalContext;
