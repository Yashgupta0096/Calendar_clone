import React from "react";
import Day from "./Day";

export default function Month({ month }) {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {/* Mapping over rows of the month */}
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {/* Mapping over each day in the row */}
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
