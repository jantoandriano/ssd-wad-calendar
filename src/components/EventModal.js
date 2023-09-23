import React, { useContext, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import GlobalContext from '../context/GlobalContext';
import { getRandomColor } from '../util';

export default function EventModal() {
  const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } = useContext(GlobalContext);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : '');
  const [email, setEmail] = useState(selectedEvent ? selectedEvent.description : '');

  function handleSubmit(e) {
    e.preventDefault();
    const color = getRandomColor();

    const calendarEvent = {
      title,
      description: email,
      label: color,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: 'update', payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: 'push', payload: calendarEvent });
    }

    setShowEventModal(false);
  }

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center font-poppins">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-black px-4 py-2 flex justify-end">
          <div onClick={() => setShowEventModal(false)} className='cursor-pointer hover:bg-red-500'>
              <FaTimes color="white" />
          </div>
        </header>
        <div className="p-3">
          <div className="grid items-end gap-y-7">            
          <div className='flex items-center gap-4'>
              <label for="title">Event Name</label>
              <input
              type="text"
              name="title"
              placeholder="Add Event Title"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-black"
              onChange={(e) => setTitle(e.target.value)}
            />
            </div>
            <div className='flex items-center gap-4'>
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Add a email"
              value={email}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-black"
              onChange={(e) => setEmail(e.target.value)}
            />
            </div>
          </div>
        </div>
        <footer className="flex justify-end p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-black hover:bg-black-600 px-6 py-2 rounded text-white hover:bg-gray-600"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}
