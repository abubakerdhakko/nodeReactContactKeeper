import React, { useState, useContext } from 'react';
import ContactContext from '../../context/contact/ContactContext';
const ContactForm = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  const { addContact, clearContacts } = useContext(ContactContext);

  const { name, email, phone, type } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addContact(contact);
    // clearContacts()
    // console.log('contactbbb', contact)
    
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
          onChange={onChange}
        />{' '}
      Personal{' '}
        <input
          type='radio'
          name='type'
          value='professional'
          checked={type === 'professional'}
          onChange={onChange}
        />{' '}
      Professional
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
