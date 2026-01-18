import React from "react";
import styles from "./style.module.scss";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // カレンダーのcss

const CalendarItem = () => {
  const [value, setValue] = useState();

  return (
    <div className={styles.calendar}>
      <Calendar value={value} onClickDay={(e) => setValue(e)} />
      <div>{value}</div>
    </div>
  );
};

export default CalendarItem;
