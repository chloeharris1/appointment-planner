import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";


import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /* State variables for contacts and appointments */
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /* Functions to add data to 
    contacts and appointments 
  */

  // adds a new appointment object to the array of appointments
 const addAppointment = (title, contact, date, time) => {
  // setting the new state with using the spread operator
  setAppointments([
    ...appointments,
    {
      title: title,
      contact: contact, 
      date: date,
      time: time
    },
  ]);
 };

// adds a new contact object to the array of contacts
 const addContact = (name, phone, email) => {
  // setting the new state with using the spread operator
  setContacts([
    ...contacts,
    {
      name: name, 
      phone: phone,
      email: email
    },
  ]);
 };

  return (
    <>
    <div className="wrapper">
      <nav className="navbar">
        <nav className="nav-menu">
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
        </nav>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage 
            contacts={contacts}
            addContact={addContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage
            appointments={appointments} 
            addAppointment={addAppointment}
            contacts={contacts}/>
          </Route>
        </Switch>
      </main>
      </div>
    </>
  );
}

export default App;
