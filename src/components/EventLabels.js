import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import { getHours } from '../util';
import { FaEdit, FaTrash } from 'react-icons/fa';

export function EventLabels({ evt, dayEvents, day }) {
  const { setSelectedEvent, setDaySelected, setShowEventModal, dispatchCalEvent } = useContext(GlobalContext);

  const height = dayEvents.length === 3 ? 'h-2/6' : dayEvents.length === 2 ? 'h-3/6' : 'h-full';
  const hours = getHours(evt.day);

  return (
    <div
      onClick={() => setSelectedEvent(evt)}
      className={`${evt.label} ${height} p-1 text-white text-sm rounded mb-1 truncate`}
    >
      <div className="flex justify-end ">
        <div
          className=" hover:bg-green-400 cursor-pointer mr-2"
          onClick={() => {
            setDaySelected(day.a);
            setShowEventModal(true);
          }}
        >
          <FaEdit />
        </div>

        <div
          className="hover:bg-red-400 cursor-pointer"
          onClick={() => {
            dispatchCalEvent({
              type: 'delete',
              payload: evt,
            });
          }}
        >
          <FaTrash />
        </div>
      </div>
      <p>{evt.title}</p>
      <p>{evt.description}</p>
      <p>{hours}</p>
    </div>
  );
}
