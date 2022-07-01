import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Footer from "../Share/Footer";

const Calendar = () => {
  return (
    <>
      <div className="flex justify-center">
        <DayPicker />
      </div>
      <Footer />
    </>
  );
};

export default Calendar;
