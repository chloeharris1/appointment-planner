import React from "react";

import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
  }

  return (
    /* Passing callback function via props
       for handling the form submission*/
    <form onSubmit={handleSubmit}>
      <label>
        <input 
        type='text'
        name='title'
        /* Value attribute set to the 
           associated variable via props */
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Appointment Title'
        required
        />
      </label>
      <br />
      <label>
        <ContactPicker 
        name='contact'
        value={contact}
        contacts={getContactNames()}
        onChange={(e) => setContact(e.target.value)}
        placeholder='Appointment With'
        /> 
      </label>
      <br />
      <label>
        <input 
        type='date'
        name='date'
        min={getTodayString()}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        />
      </label>
      <br />
      <label>
        <input 
        type='time'
        name={time}
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required 
        />
      </label>
      <br />
      <input type='submit' value='Add Appointment'/>
    </form>
  );
};
