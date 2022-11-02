import React, { useState, useEffect} from "react";

import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

/* Extract the array of contacts and the callback
for adding contacts from the props value passed 
as an argument to ContactsPage*/

export const ContactsPage = ({ contacts, addContact}) => {
// State variables holding the form’s contact data
const [name, setName] = useState('');
const [phone, setPhone] = useState('');
const [email, setEmail] = useState('');
// State variable to track a duplicate name, initialized to false
const [duplicate, setDuplicate] = useState(false);


  /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!duplicate){
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  /*
  Check for contact name in the 
  contacts array variable in props
  using hooks
  */
 useEffect(() => {
  console.log('use effect ran');
  console.log(name);
  // function, or "effect", to find a duplicate contact name
  const nameIsDuplicate = () => {
    const found = contacts.find((contact) => contact.name === name);
    if(found !== undefined) {
      return true;
    }
    return false;
  }
  // Update state to true if duplicate contact is found
  if(nameIsDuplicate()){
    setDuplicate(true);
  } else {
    setDuplicate(false);
  }
  /*Pass in an array with dependencies (state values 
    that will trigger useEffect to run when they change) 
    as a second argument */
 }, [name, contacts, duplicate]);

  return (
    <div>
      <section>
        <h2>Add Contact
          { duplicate ? 'Name Already Exists' : ''}</h2> 
        <ContactForm
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts}/>
      </section>
    </div>
  );
};
