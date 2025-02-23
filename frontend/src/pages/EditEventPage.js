import React from "react";
import EventForm from "../components/EventForm";
import {  useRouteLoaderData } from "react-router-dom";


export default function EditEventPage() {
  const data = useRouteLoaderData('event-details')
  return (
    <div>
      <EventForm event={data.event} method='PATCH'/>
    </div>
  );
}
