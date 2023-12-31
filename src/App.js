import React, { useState, useContext, useEffect } from 'react';
import CalendarHeader from './components/calendar-header';
import Month from './components/calendar-month';
import EventModal from './components/calendar-event-modal';
import { getMonthGrid } from './util';
import GlobalContext from './context/GlobalContext';
function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonthGrid(1));
  const { showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonthGrid(1));
  }, []);

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
