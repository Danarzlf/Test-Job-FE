import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { PlusIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

const options = {
  legend: {
    show: false,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#3C50E0', '#80CAEE'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 335,
    type: 'bar',  // Changed type to 'bar' for a bar chart
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },
    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: 'straight',
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: '#fff',
    strokeColors: ['#3056D3', '#80CAEE'],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: 'category',
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Des',
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: '0px',
      },
    },
    min: 0,
    max: 100,
  },
};

const ChartOne = () => {
  const [state, setState] = useState({
    series: [
      {
        name: 'Product One',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
      },
      {
        name: 'Product Two',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
      },
    ],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 py-5 pb-5 shadow-default  sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <img src="user-group-alt2.svg" alt="" />
          <span className="text-[18] font-medium">Patient overview</span>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center ">
          <button className="bg-white hover:bg-black-500 text-black-700 font-semibold hover:text-black py-2 px-4 border border-black-500 hover:border-transparent rounded flex items-center gap-2">
                                
                                    Monthly
                                    <PlusIcon className="w-5 h-5 text-black" /> 
                                </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <div className="w-full">
              <p className="text-primary text-[14px]">Total patients</p>
              <p className=" font-medium text-[26px]">839</p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <div className="w-full">
              <p className="text-secondary text-[14px]">Avg. Hospitalized patients</p>
              <p className="font-medium text-[26px]">283</p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <div className="w-full">
              <p className="text-secondary text-[14px]">Avg. Outpatient care</p>
              <p className="font-medium text-[26px]">421</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="bar"  // Ensure type is bar here as well
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
