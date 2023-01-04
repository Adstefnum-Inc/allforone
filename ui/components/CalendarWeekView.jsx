import React, { useState } from 'react';

function CalendarWeekView() {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [events, setEvents] = useState([]); // array of event objects

  function handlePrevClick() {
    setCurrentWeek(currentWeek - 1);
  }

  function handleNextClick() {
    setCurrentWeek(currentWeek + 1);
  }

  function renderCalendar() {
    const times = ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'];

    return (
      <table className="table-fixed w-full">
        <thead>
          <tr className="text-left">
            <th className="px-4 py-2"></th>
            <th className="px-4 py-2">Sun</th>
            <th className="px-4 py-2">Mon</th>
            <th className="px-4 py-2">Tue</th>
            <th className="px-4 py-2">Wed</th>
            <th className="px-4 py-2">Thu</th>
            <th className="px-4 py-2">Fri</th>
            <th className="px-4 py-2">Sat</th>
          </tr>
        </thead>
        <tbody>
          {times.map(time => {
            return (
              <tr>
                <td className="border px-4 py-2">{time}</td>
                {/* Loop through the days of the week and render a table cell for each day */}
                {[0, 1, 2, 3, 4, 5, 6].map(day => {
                  const event = events.find(event => event.day === day && event.time === time);
                  return (
                    <td className="border px-4 py-2">
                      {event ? (
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => handleEventClick(event)}
                        >
                          {event.name}
                        </button>
                      ) : (
                        ''
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  function handleEventClick(event) {
    // open the modal with the event details
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={handlePrevClick}
        >
          Prev
        </button>
        <span className="text-xl font-bold">Week {currentWeek + 1}</span>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
      {renderCalendar()}
    </div>
  );
}

export default CalendarWeekView;
