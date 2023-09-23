import React from "react";
import { getmonth } from "../util";

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satruday']
export default function CalendarHeader() {
  const month = getmonth();
  return (
    <>
      <header className="px-4 py-2 flex items-center justify-center">
        <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {month}
        </h2>
      </header>

      <div className="flex bg-black">
      {days.map((val, idx) => (
        <div className="text-center text-white py-2" style={{width: '100%'}} key={idx}>
          {val}
        </div>
      ))}
      </div>
    </>
  );
}
