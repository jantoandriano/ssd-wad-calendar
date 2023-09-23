import React, { useState, useEffect, useReducer, useMemo } from 'react';
import GlobalContext from './GlobalContext';

function eventReducer(state, { type, payload }) {
  switch (type) {
    case 'push':
      const events = state.filter((val) => val.day === payload.day);

      if (events.length === 3) {
        window.alert('Cannot add more than three events');

        return [...state];
      }
      return [...state, payload];

    case 'update':
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case 'delete':
      window.location.reload();
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}
function initEvents() {
  const storageEvents = localStorage.getItem('savedEvents');
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}

export default function ContextWrapper(props) {
  const [daySelected, setDaySelected] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [savedEvents, dispatchCalEvent] = useReducer(eventReducer, [], initEvents);

  const filteredEvents = useMemo(() => {
    return savedEvents;
  }, [savedEvents]);

  useEffect(() => {
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
  }, [savedEvents]);

  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);

  return (
    <GlobalContext.Provider
      value={{
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
        dispatchCalEvent,
        selectedEvent,
        setSelectedEvent,
        savedEvents,
        filteredEvents,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
