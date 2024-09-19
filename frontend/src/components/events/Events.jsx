import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import EventCard from './Eventcard';
import Herosection from '../herosection/Herosection';
import PopupEvent from './PopupEvent';
import UpcomingEvents from './UpcomingEvents';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_API_URL}/events`);
        // Reverse the events array to show the most recent event first
        const reversedEvents = response.data.reverse();
        setEvents(reversedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <Header />
      <Herosection
        imageUrl="/Images/Herosection/events.png"
        heading="Events"
        description="Home / Events"
      />

      <div className="container-body mt-20">
        <div className="px-4 py-3 mt-10 sm:mx-10 lg:mx-32 md:my-6">
          <div className="textpart mb-6">
            <div className="inline-flex gap-2 justify-center items-center">
              <p className="text-gray-700 text-md font-semibold font-montserrat text-sm">
                Enroll Yourself Into
              </p>
              <hr className="w-[60px] border-t-1 border-gray-400 mx-auto" />
            </div>
            <h2 className="text-3xl font-bold font-playfair">Our Major Events</h2>
          </div>

          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-10 md:gap-x-8">
            {events.map((event, index) => (
              <EventCard
                key={index}
                image={event.eventImageUrl}
                title={event.eventTitle}
                description={event.eventDescription}
                location={event.eventLocation}
                isPaid={event.isPaid}
                amount={event.amount}
                slots={event.slots}
                date={event.eventDate}
                time={event.eventTime}
                status="Available" // This will be fetched from another API later
                onClick={() => setSelectedEvent(event)}
              />
            ))}
          </div>
        </div>
      </div>
      {selectedEvent && (
        <PopupEvent event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
      <UpcomingEvents />
      <Footer />
    </>
  );
};

export default Events;
