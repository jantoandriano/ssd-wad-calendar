import React, { useState, useContext, useEffect } from 'react';
import './App.css';
import CalendarHeader from './components/calendar-header';
import Month from './components/calendar-month';
import EventModal from './components/calendar-event-modal';
import { getMonth } from './util';
import GlobalContext from './context/GlobalContext';
function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Month month={currenMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
