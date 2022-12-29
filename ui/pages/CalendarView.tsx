import { FunctionComponent } from 'react';
import Popup from 'react-popup';
import Link from 'next/link';

const CalendarView: FunctionComponent = () => {
  return (
    <div>
      <div className="grid grid-cols-7 grid-rows-12">
        {/* Render cells for each day and hour */}
        {[...Array(7 * 12)].map((_, index) => {
          // Calculate the day and hour for the current cell
          const day = index % 7;
          const hour = Math.floor(index / 7);
          return (
            <div
              key={index}
              className="border border-gray-300"
              onClick={() => {
                // Show a pop-up with the date and time when the cell is clicked
                Popup.create({
                  content: `Date: ${day} Hour: ${hour}`,
                  buttons: {
                    right: [{
                      text: 'Close',
                      action: Popup.close
                    }]
                  }
                });
              }}
            />
          );
        })}
      </div>
      {/* Add links to navigate between different views of the calendar */}
      <div className="mt-4">
        <Link href="/calendar/month">
          <a className="px-4 py-2 rounded-full text-white bg-blue-500 hover:bg-blue-700">Month</a>
        </Link>
        <Link href="/calendar/week">
          <a className="px-4 py-2 rounded-full text-white bg-blue-500 hover:bg-blue-700 ml-4">Week</a>
        </Link>
        <Link href="/calendar/day">
          <a className="px-4 py-2 rounded-full text-white bg-blue-500 hover:bg-blue-700 ml-4">Day</a>
        </Link>
      </div>
    </div>
  );
};

export default CalendarView;
