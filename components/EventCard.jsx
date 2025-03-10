import React from "react";
import "../App.css";

function EventCard({ event }) {
  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <p>Category: {event.category}</p>
    </div>
  );
}

export default EventCard;
/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>*/


/*<div className="event-card">
      <h3>{event.title}</h3>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <p>Category: {event.category}</p>
    </div>*/