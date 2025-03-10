import React, { useState } from "react";
import EventCard from "../components/EventCard";
import EventFilter from "../components/EventFilter";
import EventForm from "../components/EventForm";

function Events() {
  const [events, setEvents] = useState([
    { title: "Community Prayer", date: "2025-03-15", location: "Church Hall", category: "Religious" },
    { title: "Charity Drive", date: "2025-04-10", location: "Community Center", category: "Charity" },
  ]);

  const [filter, setFilter] = useState("");

  const filteredEvents = filter ? events.filter(event => event.category === filter) : events;

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div>
      <h2>Events</h2>
      <EventFilter setFilter={setFilter} />
      {filteredEvents.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
      <EventForm addEvent={addEvent} />
    </div>
  );
}

export default Events;
