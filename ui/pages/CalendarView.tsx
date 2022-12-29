import { FunctionComponent, useState } from 'react';
import Modal from 'react-modal';
import Link from 'next/link';

const CalendarView: FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDay, setModalDay] = useState(0);
  const [modalHour, setModalHour] = useState(0);

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        contentLabel="Date and time"
        onRequestClose={() => setIsModalOpen(false)}
      >
        <p>Date: {modalDay}</p>
        <p>Hour: {modalHour}</p>
      </Modal>
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
                // Open the modal and set the date and time when the cell is clicked
                setModalDay(day);
                setModalHour(hour);
                setIsModalOpen(true);
              }}
            />
          );
        })}
      </div>
      {/* Add a button to open the modal */}
      <button onClick={() => setIsModalOpen(true)}>Open modal</button>
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
