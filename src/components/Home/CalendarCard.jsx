import React from "react";
import { DateTime } from "luxon";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

export default function CalendarCard({ event }) {
  return (
    <div className="calendarContianer">
      <div className="dateBox">
        <div className="month">
          {DateTime.fromISO(event.eventDate).toFormat("MMM")}
        </div>
        <div className="day">
          {DateTime.fromISO(event.eventDate).toFormat("dd")}
        </div>
      </div>
      <div className="detailBox">
        <div>
          {event.flag === "Cancelled" ? (
            <div className="cancelledEvent">Cancelled</div>
          ) : null}
          {event.flag === "Updated" ? (
            <div className="updatedEvent">Updated</div>
          ) : null}
        </div>
        <div>
          <div className="eventTitle">{event.eventName}</div>
          <div className="eventLocation">
            <LocationOnIcon sx={{ color: "#8C6910", marginRight: ".5rem" }} />
            {event.location}
          </div>
          <div className="eventTime">
            <AccessTimeIcon sx={{ color: "#8C6910", marginRight: ".5rem" }} />
            {DateTime.fromISO(event.eventDate).toFormat("h:mm a")}
          </div>
          <div className="eventContact">
            <PermContactCalendarIcon
              sx={{ color: "#8C6910", marginRight: ".5rem" }}
            />
            {event.contact}
          </div>
        </div>
        <div className="detailHr" />
      </div>
    </div>
  );
}
