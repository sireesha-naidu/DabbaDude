import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Don't forget to import the CSS

function DatePickerItem() {
  const [dates, setDates] = useState([new Date(), new Date()]); // Initializing with two dates

  const handleDateChange = (newDate, index) => {
    const updatedDates = [...dates]; // Copy the existing array
    updatedDates[index] = newDate; // Update the date at the specific index
    setDates(updatedDates); // Set the updated array
  };

  return (
    <div>
      {dates.map((date, index) => (
        <DatePicker
          key={index}
          selected={date}
          onChange={(newDate) => handleDateChange(newDate, index)}
          placeholderText="dd/mm/yyyy"
          filterDate={(newDate) => newDate.getDay() !== 6 && newDate.getDay() !== 0} // Disable weekends
        />
      ))}
    </div>
  );
}

export default DatePickerItem;
