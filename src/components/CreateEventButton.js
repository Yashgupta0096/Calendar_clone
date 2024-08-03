import React, { useContext } from "react";
import plusImg from "../assets/plus.svg"; // Import the image for the button icon
import GlobalContext from "../context/GlobalContext";

export default function CreateEventButton() {
  // Destructure setShowEventModal from GlobalContext
  const { setShowEventModal } = useContext(GlobalContext);

  return (
    <button
      // Set showEventModal to true when the button is clicked
      onClick={() => setShowEventModal(true)}
      className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
    >
      {/* Image for the button icon */}
      <img src={plusImg} alt="create_event" className="w-7 h-7" />
      {/* Button text */}
      <span className="pl-3 pr-7"> Create</span>
    </button>
  );
}
