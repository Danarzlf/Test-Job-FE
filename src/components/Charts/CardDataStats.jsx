import React from 'react';
import { PlusIcon, ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline';

const CardDataStats = ({
  title,
  total,
  rate,
  levelUp,
  levelDown,
  children,
  desc,
}) => {
  // Menentukan apakah rate <= 2.5%, tombol merah dan ArrowDownIcon
  const isRed = parseFloat(rate) <= 2.5; // Rate <= 2.5% akan menjadi merah
  const rateClass = isRed
    ? 'py-custom2px px-custom6px flex items-center gap-1 text-custom12px font-medium text-meta-3 rounded-full text-red-700 bg-red-100 border border-red-400 focus:outline-none hover:bg-red-300 focus:ring-4 focus:ring-red-300'
    : 'py-custom2px px-custom6px flex items-center gap-1 text-custom12px font-medium text-meta-3 rounded-full text-green-700 bg-green-100 border border-green-400 focus:outline-none hover:bg-green-300 focus:ring-4 focus:ring-green-300';

  // Menentukan ikon yang digunakan
  const ArrowIcon = isRed ? ArrowDownIcon : ArrowUpIcon;

  return (
    <div className="mb-5 mt-5 rounded-2xl border border-[#DCDFEA] bg-white py-5 px-5 shadow-default">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5846 2C11.7927 2 12.7721 2.97938 12.7721 4.1875C12.7721 5.39562 11.7927 6.375 10.5846 6.375C10.4708 6.375 10.3591 6.36632 10.25 6.34958M11.2264 8.21527C11.4275 8.223 11.6304 8.23437 11.8366 8.24936C13.3318 8.35808 14.4802 9.57105 14.6944 11.0548L14.736 11.3434C14.8595 12.1986 14.2654 12.9968 13.4062 13.089C13.3119 13.0991 13.2184 13.1087 13.1258 13.1179M8.87552 3.875C8.87552 5.32475 7.70027 6.5 6.25052 6.5C4.80077 6.5 3.62552 5.32475 3.62552 3.875C3.62552 2.42525 4.80077 1.25 6.25052 1.25C7.70027 1.25 8.87552 2.42525 8.87552 3.875ZM2.86897 14.5548C5.29214 14.8132 7.2169 14.8162 9.63649 14.5568C10.6674 14.4462 11.3803 13.4884 11.2322 12.4621L11.1822 12.1158C10.9252 10.3353 9.54719 8.8797 7.75293 8.74924C6.72933 8.67481 5.77536 8.67493 4.7498 8.74964C2.95481 8.88041 1.57576 10.3361 1.31866 12.1173L1.26947 12.4581C1.12113 13.4859 1.83639 14.4446 2.86897 14.5548Z"
              stroke="#9E77ED"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>

          <span className="text-custom14px font-medium">{title}</span>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
          {/* {rate} */}
        </span>
      </div>
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        {children}
      </div>

      <div className="flex items-end justify-between">
        <div>
          <h4 className="text-custom26px font-bold text-black mt-3">{total}</h4>
          <span className="text-custom12px text-[#5D6B98] font-medium">
            Compare with last month
          </span>
        </div>

        <span className={rateClass}>
          {/* Render ikon sesuai kondisi */}
          <ArrowIcon className="w-3 h-3 mr-1" />
          {rate}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
