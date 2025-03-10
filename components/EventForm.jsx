import React, { useState } from "react";

function EventForm({ addEvent }) {
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    location: "",
    category: "Religious",
  });

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventData.title && eventData.date && eventData.location) {
      addEvent(eventData);
      setEventData({ title: "", date: "", location: "", category: "Religious" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Event</h3>
      <input type="text" name="title" placeholder="Event Title" value={eventData.title} onChange={handleChange} required />
      <input type="date" name="date" value={eventData.date} onChange={handleChange} required />
      <input type="text" name="location" placeholder="Location" value={eventData.location} onChange={handleChange} required />
      <select name="category" value={eventData.category} onChange={handleChange}>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>
      <button type="submit">Add Event</button>
    </form>
  );
}

export default EventForm;

