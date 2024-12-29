import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import dayjs from "dayjs";
import React, { useState } from "react";
import { PlusIcon, ArrowUpIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

const options = {
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'donut',
  },
  colors: ['#3C50E0', '#6577F3', '#8FD0EF', '#0FADCF'],
  labels: ['Desktop', 'Tablet', 'Mobile', 'Unknown'],
  legend: {
    show: false,
    position: 'bottom',
  },
  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        background: 'transparent',
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

const ChartTwo = () => {
  const [state, setState] = useState({
    series: [65, 34, 12, 56],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      series: [65, 34, 12, 56],
    }));
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="flex justify-center w-full">
        <div className="w-96 h-96 px-0 py-2">
          <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
            <div className="flex w-full flex-wrap gap-3 sm:gap-5">
              <img src="hospital.svg" alt="" />
              <span className="text-[18] font-medium">Top 3 in-demand clinics</span>
            </div>
            <div className="flex w-full max-w-45 justify-end">
              <div className="inline-flex items-center">    
                  <EllipsisHorizontalIcon className="w-5 h-5 text-black" />   
              </div>
            </div>
            </div>
          
          <div className="sm:px-7.5 col-span-12 rounded-sm bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
            

            <div className="mb-2">
              <div id="chartThree" className="mx-auto flex justify-center">
                <ReactApexChart
                  options={options}
                  series={state.series}
                  type="donut"
                />
              </div>
            </div>

            <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
              <div className="sm:w-1/2 w-full px-8">
                <div className="flex w-full items-center">
                  <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-primary"></span>
                  <p className="flex w-full justify-between text-sm font-medium text-black">
                    <span> Desktop </span>
                    <span> 65% </span>
                  </p>
                </div>
              </div>
              <div className="sm:w-1/2 w-full px-8">
                <div className="flex w-full items-center">
                  <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6577F3]"></span>
                  <p className="flex w-full justify-between text-sm font-medium text-black">
                    <span> Tablet </span>
                    <span> 34% </span>
                  </p>
                </div>
              </div>
              <div className="sm:w-1/2 w-full px-8">
                <div className="flex w-full items-center">
                  <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8FD0EF]"></span>
                  <p className="flex w-full justify-between text-sm font-medium text-black">
                    <span> Mobile </span>
                    <span> 45% </span>
                  </p>
                </div>
              </div>
              <div className="sm:w-1/2 w-full px-8">
                <div className="flex w-full items-center">
                  <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#0FADCF]"></span>
                  <p className="flex w-full justify-between text-sm font-medium text-black">
                    <span> Unknown </span>
                    <span> 12% </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartTwo;
