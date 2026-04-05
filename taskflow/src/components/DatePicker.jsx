import { format } from "date-fns";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Default = ({viewdate, setViewdate}) => {
   const [selectedDate, setSelectedDate] = useState(new Date());

  const handleClick = (date) => {
    setSelectedDate(date)
    setViewdate(format(date, "dd/MM/yyyy HH:mm"  ))
  }


  return( <DatePicker className="bg-cyan-100   w-[30vh] rounded-2xl "
  showIcon
    toggleCalendarOnIconClick
    showTimeSelect
    dateFormat="dd/MM/yyyy HH:mm" 
    timeFormat="HH:mm"   
    timeIntervals={15} 
    selected={selectedDate}
    onChange={handleClick}
    
  />
  )
};



export default Default;