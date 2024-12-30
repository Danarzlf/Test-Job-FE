import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PlusIcon, ArrowUpIcon, EllipsisHorizontalIcon  } from '@heroicons/react/24/outline';

const chatData = [
  {
    avatar: '/user-01.png',
    name: 'Esther Howard',
    text: 'Poly dental',
    textCount: 3,
    color: '#10B981',
    time : '09:40',
    day : 'today',
  },
  {
    avatar: '/user-02.png',
    name: 'Arlene McCoy',
    text: 'Psychiatrist',
    textCount: 0,
    color: '#10B981',
    time : '09:40',
    day : 'today',
  },
  {
    avatar: '/user-03.png',
    name: 'Guy Hawkins',
    text: "Internist",
    textCount: 0,
    color: '#10B981',
    time : '09:40',
    day : 'today',
  },
  {
    avatar: '/user-04.png',
    name: 'Courtney Henry',
    text: 'Ophtahalmologist',
    textCount: 2,
    color: '#FFBA00',
    time : '09:40',
    day : 'today',
  },
  {
    avatar: '/user-05.png',
    name: 'Annette Black',
    text: 'Neurologist',
    textCount: 0,
    color: '#10B981',
    time : '09:40',
    day : 'today',
  },
];


const ChatCard = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
            <div className="flex flex-wrap gap-3 sm:gap-5">
              <img src="first-air-kit.svg" alt="" />
              <span className="text-[18] font-medium">Appointment</span>
            </div>
            <div className="flex max-w-45 justify-end">
              <div className="inline-flex items-center">    
                  <EllipsisHorizontalIcon className="w-5 h-5 text-black" />   
              </div>
            </div>
          </div>
      <div>
        {chatData.map((chat, key) => (
          <Link
            to="/"
            className="flex items-center gap-5 py-3 px-10 hover:bg-gray-3 dark:hover:bg-meta-4"
            key={key}
          >
            <div className="relative h-14 w-14 rounded-full">
              <img src={chat.avatar} alt="User" />
              {/* <span
                className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white"
                style={{ backgroundColor: chat.color }}
              ></span> */}
            </div>

            <div className="flex flex-1 items-center justify-between">
              <div>
                <h5 className="font-medium text-black ">{chat.name}</h5>
                <p>
                  <span className="text-sm text-[#5D6B98] ">{chat.text}</span>
                </p>
              </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                 <div>
                <h5 className="font-medium text-[#5D6B98] ">{chat.day}</h5>
                <p>
                  <span className="text-sm text-black font-semibold">{chat.time}</span>
                </p>
              </div>
                </div>  
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

ChatCard.propTypes = {
  chatData: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      time: PropTypes.number.isRequired,
      textCount: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ),
};

export default ChatCard;
