import React, { useContext, useState, useEffect } from 'react';
import GlobalContext from '../context/GlobalContext';
import { convertTimeStamp, getDay } from '../util';
import { EventLabels } from './EventLabels';

export default function Day({ day }) {
  const [dayEvents, setDayEvents] = useState([]);
  const { setDaySelected, setShowEventModal, filteredEvents } = useContext(GlobalContext);

  useEffect(() => {
    const events = filteredEvents.filter((evt) => convertTimeStamp(evt.day) === convertTimeStamp(day.a));
    setDayEvents(events);
  }, [filteredEvents, day]);

  const dateNumber = day.m === '2' ? getDay(day.a) : '';

  return (
    <div className="border border-gray-200 flex flex-col font-poppins">
      <header
        className="flex flex-col items-center cursor-pointer bg-gray-100 hover:bg-gray-200 h-8"
        onClick={() => {
          setDaySelected(day.a);
          setShowEventModal(true);
        }}
      >
        <p className="text-sm p-1 my-1 text-center">{dateNumber}</p>
      </header>
      <div className="flex-1 hover:bg-gray-200">
        {dayEvents.map((evt, idx) => {
          return (
            <React.Fragment key={idx}>
              <EventLabels evt={evt} dayEvents={dayEvents} day={day} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
