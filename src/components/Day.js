import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import { convertTimeStamp, getDay } from "../util";

export default function Day({ day }) {
  const [dayEvents, setDayEvents] = useState([]);
  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);

  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) => convertTimeStamp(evt.day) === convertTimeStamp(day.a)
    );
    setDayEvents(events)
  }, [filteredEvents, day]);

  const height = dayEvents.length === 3 ? 'h-2/6' : dayEvents.length === 2 ? 'h-3/6' : 'h-full';
  const dateNumber = day.m === '2' ? getDay(day.a) : '';

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center cursor-pointer"
      onClick={() => {
        setDaySelected(day.a);
        setShowEventModal(true);
      }}
      >
        <p
          className={`text-sm p-1 my-1 text-center`}

        >
          {dateNumber}
        </p>
      </header>
      <div
        className="flex-1"
        onClick={() => {
          setDaySelected(day.a);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt, idx) => {
          return (
            <div
              key={idx}
              onClick={() => setSelectedEvent(evt)}
              className={`${evt.label} ${height} p-1 text-white text-sm rounded mb-1 truncate hover:bg-gray-400`}
            >
              <p>{evt.title}</p>
              <p>{evt.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}
