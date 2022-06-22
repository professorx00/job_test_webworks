import React, { useEffect, useState } from "react";
import CalendarCard from "./CalendarCard";
import Button from "../Button";
import HeaderStyleTwo from "../App/HeaderStyleTwo";

const fakeFetchcall = () => {
  return [
    {
      id: 1,
      eventName: "Board of Economic Advisors Meeting",
      eventDate: "2019-11-22T18:30:44.000Z",
      location: "Room 417, Bowers Conference Room, Rembert Dennis Building",
      contact: "(803)7342265",
      flag: "Updated",
    },
    {
      id: 2,
      eventName: "Board of Economic Advisors Meeting",
      eventDate: "2019-11-23T18:30:44.000Z",
      location: "Room 417, Bowers Conference Room, Rembert Dennis Building",
      contact: "(803)7342265",
      flag: "Cancelled",
    },
    {
      id: 3,
      eventName: "Board of Economic Advisors Meeting",
      eventDate: "2019-11-25T18:30:44.000Z",
      location: "Room 417, Bowers Conference Room, Rembert Dennis Building",
      contact: "(803)7342265",
    },
    {
      id: 4,
      eventName: "Board of Economic Advisors Meeting",
      eventDate: "2019-11-28T18:30:44.000Z",
      location: "Room 417, Bowers Conference Room, Rembert Dennis Building",
      contact: "(803)7342265",
    },
  ];
};

export default function Calendar() {
  const [calendarData, setCalendarData] = useState([]);

  useEffect(() => {
    setCalendarData(fakeFetchcall());
  }, []);

  return (
    <div>
      <HeaderStyleTwo label="Calendar of Events" />
      {calendarData.map((event) => {
        return <CalendarCard key={event.id} event={event} />;
      })}
      <div className="eventButtonContainer">
        <Button variant="closed" label="View All Events" />
      </div>
    </div>
  );
}
