import React from "react";
import { DateTime } from "luxon";

export default function UpdateCard({ update }) {
  return (
    <div className="updateCard">
      <a className="linkStyle2" href={update.link}>
        {update.title}
      </a>
      <p>{update.description}</p>
      <div className="publishContainer">
        <span className="publishDate">
          <strong>Published:</strong>{" "}
          {DateTime.fromISO(update.published).toFormat("MMM dd, yyyy")}
        </span>
        <div className="updateFlag">{update.flag}</div>
      </div>
    </div>
  );
}
