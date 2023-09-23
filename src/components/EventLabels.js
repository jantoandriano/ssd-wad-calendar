import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { getHours } from "../util";

export function EventLabels({evt, dayEvents}) {
    const {
        setSelectedEvent,
      } = useContext(GlobalContext);
    
    const height = dayEvents.length === 3 ? 'h-2/6' : dayEvents.length === 2 ? 'h-3/6' : 'h-full';
    const hours = getHours(evt.day);

    return (
        <div
              onClick={() => setSelectedEvent(evt)}
              className={`${evt.label} ${height} p-1 text-white text-sm rounded mb-1 truncate hover:bg-gray-400`}
            >
              <p>{evt.title}</p>
              <p>{evt.description}</p>
              <p>{hours}</p>
            </div>
    )
}