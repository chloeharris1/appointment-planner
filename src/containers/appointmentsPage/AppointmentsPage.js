import React, { useState } from "react";

import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';


/* Recieve three props: list of appointments, contacts 
  and the callback function for adding appointments*/

export const AppointmentsPage = ({ 
  appointments, 
  contacts, 
  addAppointment }) => {
  // State variables holding the form’s appointment data
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState(
    contacts.length > 0 ? contacts[0].name : ''
  );
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  
  /* Add a new appointment and clear form on submission*/
  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(title, contact, date, time);
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
        contacts={contacts} 
        title={title}
        setTitle={setTitle}
        contact={contact}
        setContact={setContact}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments}/>
      </section>
    </div>
  );
};
