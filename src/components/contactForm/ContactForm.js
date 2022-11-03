import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    /* Passing callback function via props
       for handling the form submission*/
    <form onSubmit={handleSubmit}>
      <label>
        <input 
        type='text'
        name='name'
        /* Value attribute set to the 
           associated variable via props */
        value={name}
        /* onChange set to a callback function that 
           passes e.target.value to the associated 
           setter function from props */ 
        onChange={(e) => setName(e.target.value)}
        placeholder='Contact Name'
        required
        />
      </label>
      <br />
      <label>
        <input 
        type='tel'
        name='phone'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder='Contact Phone (###-###-####)'
        required
        // Regex for US phone numbers
        pattern='[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}'
        />
      </label>
      <br />
      <label>
        <input 
        type='email'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Contact Email'
        required
        />
      </label>
      <br />
      <input type='submit' value='Add Contact'/>
    </form>
  );
};
