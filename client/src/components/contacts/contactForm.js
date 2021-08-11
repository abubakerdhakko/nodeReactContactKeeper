import React, { useState, useContext } from 'react';
import ContactContext from '../../context/contact/ContactContext';
const ContactForm = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });



  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => { 
    e.preventDefault();
    ContactContext.addContact(contact);
    setContact({ name, email, phone, type });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2 className="text-primary">Add contact</h2>
        <input type="text" name="name" value={name} onChange={onChange}></input>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
        ></input>
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={onChange}
        ></input>
        <h5>Contact Type</h5>
        <input
          type='radio'
          name='type'
          value='personal'
          checked={type === 'personal'}
        ></input>
        personal{''}
        <input
          type="radio"
          name="type"
          value="perfessional"
          checked={type === 'perfessional'}
        ></input>
        perfessional{''}
        <input
          type="submit"
          value="Add Contact"
          className="btn btn-primary btn-block"
        ></input>
      </form>
    </div>
  );
};

export default ContactForm;
