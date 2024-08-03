import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function Labels() {
  // Destructuring values from GlobalContext
  const { labels, updateLabel } = useContext(GlobalContext);

  return (
    <React.Fragment>
      {/* Header for labels section */}
      <p className="text-gray-500 font-bold mt-10">Label</p>

      {/* Mapping over the labels to create a list of checkboxes */}
      {labels.map(({ label: lbl, checked }, idx) => (
        <label key={idx} className="items-center mt-3 block">
          {/* Checkbox input for each label */}
          <input
            type="checkbox"
            checked={checked}
            onChange={() =>
              // Toggles the checked state of the label when clicked
              updateLabel({ label: lbl, checked: !checked })
            }
            className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}
          />
          {/* Display label text next to the checkbox */}
          <span className="ml-2 text-gray-700 capitalize">{lbl}</span>
        </label>
      ))}
    </React.Fragment>
  );
}
