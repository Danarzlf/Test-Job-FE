import dayjs from "dayjs";
import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function Calendar() {
	const days = ["S", "M", "T", "W", "T", "F", "S"];
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(currentDate);

	const generateDate = (month = dayjs().month(), year = dayjs().year()) => {
		const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
		const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

		const arrayOfDate = [];

		// create prefix date
		for (let i = 0; i < firstDateOfMonth.day(); i++) {
			const date = firstDateOfMonth.day(i);

			arrayOfDate.push({
				currentMonth: false,
				date,
			});
		}

		// generate current date
		for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
			arrayOfDate.push({
				currentMonth: true,
				date: firstDateOfMonth.date(i),
				today:
					firstDateOfMonth.date(i).toDate().toDateString() ===
					dayjs().toDate().toDateString(),
			});
		}

		const remaining = 42 - arrayOfDate.length;

		for (
			let i = lastDateOfMonth.date() + 1;
			i <= lastDateOfMonth.date() + remaining;
			i++
		) {
			arrayOfDate.push({
				currentMonth: false,
				date: lastDateOfMonth.date(i),
			});
		}
		return arrayOfDate;
	};

	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const cn = (...classes) => {
		return classes.filter(Boolean).join(" ");
	};

	return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="flex justify-center  w-full">
        <div className="w-96 px-5 py-5">
          <div className="flex justify-between items-center">
            <h1 className="select-none font-semibold">
              {months[today.month()]}, {today.year()}
            </h1>
            <div className="flex gap-10 items-center">
              <GrFormPrevious
                className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  setToday(today.month(today.month() - 1));
                }}
              />
              <h1
                className="cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  setToday(currentDate);
                }}
              >
                Today
              </h1>
              <GrFormNext
                className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  setToday(today.month(today.month() + 1));
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-7">
            {days.map((day, index) => {
              return (
                <h1
                  key={index}
                  className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
                >
                  {day}
                </h1>
              );
            })}
          </div>
  
          <div className="grid grid-cols-7">
            {generateDate(today.month(), today.year()).map(
              ({ date, currentMonth, today }, index) => {
                return (
                  <div
                    key={index}
                    className="p-2 text-center grid place-content-center text-sm border-t"
                  >
                    <h1
                      className={cn(
                        currentMonth ? "" : "text-gray-400",
                        today ? "bg-red-600 text-white" : "",
                        selectDate
                          .toDate()
                          .toDateString() === date.toDate().toDateString()
                          ? "bg-black text-white"
                          : "",
                        "h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                      )}
                      onClick={() => {
                        setSelectDate(date);
                      }}
                    >
                      {date.date()}
                    </h1>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
  
}
