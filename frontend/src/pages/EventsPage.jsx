import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import Footer from "../components/Layout/Footer";
import AIButton from "../components/ai/AIButton";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          {allEvents.length !== 0 ? (
            allEvents.map((event) => (
              <EventCard key={event.id} active={true} data={event} />
            ))
          ) : (
            <p>No events available.</p>
          )}
          <AIButton/>
          <Footer/>
        </div>
      )}
    </>
  );
};

export default EventsPage;
