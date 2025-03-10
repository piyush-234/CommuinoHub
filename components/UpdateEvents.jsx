import { useState } from "react";

function Events() {
  const [events, setEvents] = useState([
    { title: "Charity Drive", date: "2025-04-10", location: "City Park", category: "Charity" },
    { title: "Interfaith Meetup", date: "2025-04-15", location: "Community Center", category: "Social" }
  ]);
  const [filter, setFilter] = useState("All");
  const [newEvent, setNewEvent] = useState({ title: "", date: "", location: "", category: "" });

  // Filter Events
  const filteredEvents = filter === "All" ? events : events.filter(event => event.category === filter);

  // Handle Adding Events
  const addEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.location || !newEvent.category) {
      alert("Please fill in all fields before adding an event.");
      return;
    }

    setEvents([...events, newEvent]);
    setNewEvent({ title: "", date: "", location: "", category: "" });
  };

  return (
    <div className="events-container animate__animated animate__fadeInUp">
      <h2>Events</h2>

      {/* Filter Dropdown */}
      <select onChange={(e) => setFilter(e.target.value)} className="form-select mb-3">
        <option value="All">All Categories</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>

      {/* Event List */}
      <ul className="list-group mb-3">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <li key={index} className="list-group-item event-item">
              <strong>{event.title}</strong> - {event.date} at {event.location} ({event.category})
            </li>
          ))
        ) : (
          <li className="list-group-item text-center">No events found in this category.</li>
        )}
      </ul>

      {/* Add Event Form */}
      <h3>Add New Event</h3>
      <input
        type="text"
        placeholder="Event Title"
        className="form-control mb-2"
        value={newEvent.title}
        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
      />
      <input
        type="date"
        className="form-control mb-2"
        value={newEvent.date}
        onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
      />
      <input
        type="text"
        placeholder="Location"
        className="form-control mb-2"
        value={newEvent.location}
        onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
      />
      <select
        className="form-select mb-2"
        value={newEvent.category}
        onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
      >
        <option value="">Select Category</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>
      <button className="btn btn-success" onClick={addEvent}>Add Event</button>
    </div>
  );
}

export default Events;