import React from "react";
import Schedule from "./Schedule.js";

const marketSchedule = [
   {
      day: "Sunday",
      location: "Lents International",
      hours: "9:00am - 2:00pm",
      booth: "4A",
   },
   {
      day: "Monday",
      location: "Pioneer Courthouse Square",
      hours: "10:00am - 2:00pm",
      booth: "7C",
   },
   {
      day: "Tuesday",
      location: "Hillsboro",
      hours: "5:00pm - 8:30pm",
      booth: "1F",
   },
   {
      day: "Wednesday",
      location: "Shemanski Park",
      hours: "10:00am - 2:00pm",
      booth: "3E",
   },
   {
      day: "Thursday",
      location: "Northwest Portland",
      hours: "2:00pm - 6:00pm",
      booth: "6D",
   },
   {
      day: "Saturday",
      location: "Beaverton",
      hours: "10:00am - 1:30pm",
      booth: "9G",
   },
];

function ScheduleList() {
   let today = new Date();
   let day = today.getDay();
   
   let result;
   
   switch (day) {
      case 1:
      result = marketSchedule.find(({ day }) => day === "Sunday");
      break;
      case 2:
      result = marketSchedule.find(({ day }) => day === "Monday");
      break;
      case 3:
      result = marketSchedule.find(({ day }) => day === "Tuesday");
      break;
      case 4:
      result = marketSchedule.find(({ day }) => day === "Wednesday");
      break;
      case 5:
      result = marketSchedule.find(({ day }) => day === "Thursday");
      break;
      case 6:
      result = marketSchedule.find(({ day }) => day === "Friday");
      break;
      case 7:
      result = marketSchedule.find(({ day }) => day === "Saturday");
      break;
      default: 
      result = marketSchedule.find(({ day }) => day === "Sunday");
   }
   return (
      <React.Fragment>
      <Schedule
      day={result.day}
      location={result.location}
      hours={result.hours}
      booth={result.booth}
      key={1}
      />
      </React.Fragment>
      );
   }
   
   export default ScheduleList;
   