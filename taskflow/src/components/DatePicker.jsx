import { format } from "date-fns";
import { style } from "motion/react-client";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const EditTaskDate = ({ setEditViewdate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleClick = (date) => {
    setSelectedDate(date);
    setEditViewdate(format(date, "dd/MM/yyyy HH:mm"));

  };

      return (
      <DatePicker
        showIcon
        toggleCalendarOnIconClick
        showTimeSelect
        dateFormat="dd/MM/yyyy HH:mm"
        timeFormat="HH:mm"
        timeIntervals={15}
        selected={selectedDate}
        onChange={handleClick}
      />
    );
};


export const NewTaskDate = ({ setNewtaskViewdate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleClick = (date) => {
    setSelectedDate(date);
    setNewtaskViewdate(format(date, "dd/MM/yyyy HH:mm"));


  };
      return (
      <DatePicker
        showIcon
        toggleCalendarOnIconClick
        showTimeSelect
        dateFormat="dd/MM/yyyy HH:mm"
        timeFormat="HH:mm"
        timeIntervals={15}
        selected={selectedDate}
        onChange={handleClick}
      />
    );
};
