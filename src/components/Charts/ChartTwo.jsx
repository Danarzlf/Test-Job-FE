import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import dayjs from "dayjs";
import React, { useState } from "react";
import { PlusIcon, ArrowUpIcon, EllipsisHorizontalIcon, ArrowDownIcon } from '@heroicons/react/24/outline';

const options = {
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'donut',
  },
  colors: ['#F04438', '#6172F3', '#22CCEE'],
  labels: ['Neurologist', 'Internist', 'Dental'],
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
          width: 280,
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
    series: [165, 249, 120],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      series: [165, 249, 120],
    }));
  };

  return (
    <div className="col-span-12 rounded-2xl border border-[#DCDFEA] bg-white shadow-default xl:col-span-4">
      <div className="flex justify-center">
        <div className="">
          <div className="mb-5 p-5 flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
            <div className="flex  flex-wrap gap-3 sm:gap-5">
              <img src="hospital.svg" alt="" />
              <span className="  font-medium">Top 3 in-demand clinics</span>

            </div>
            <div className="flex  max-w-45 justify-end">
              <div className="inline-flex items-center">    
                  <EllipsisHorizontalIcon className="w-5 h-5 text-black" />   
              </div>
            </div>
            </div>
          
          <div className="sm:px-7.5 col-span-12 rounded-sm bg-white px-5 pb-5 pt-7.5 shadow-default xl:col-span-5">
            

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
                  <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#22CCEE]"></span>
                  <p className="flex w-full justify-between text-sm font-medium text-black">
                    <span> Dental </span>
                    <span> 120 </span>
                  </p>
                </div>
              </div>
              <div className="sm:w-1/2 w-full px-8">
                <div className="flex w-full items-center">
                  <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6172F3]"></span>
                  <p className="flex w-full justify-between text-sm font-medium text-black">
                    <span> 249 </span>
                    <span> Inrernist</span>
                  </p>
                </div>
              </div>
              <div className="sm:w-1/2 w-full px-8">
                <div className="flex w-full items-center">
                  <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#F04438]"></span>
                  <p className="flex w-full justify-between text-sm font-medium text-black">
                    <span> Neurologist </span>
                    <span> 165 </span>
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
