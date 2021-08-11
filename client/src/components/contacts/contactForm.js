import React, { useState, useContext, useEffect } from 'react';
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

  const { addContact, current, clearCurrent, updateContact } = contactContext

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
      console.log('Condition 1')
    } else {
      updateContact(contact)
      console.log('Condition 2')
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent()
  }
  useEffect(() => {
    if (current !== null) {
      setContact(current)
    } else (
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'perfessional',
      })
    )
  }, [contactContext, current])



  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2 className="text-primary">{current ? 'Edit Contact' : 'Add Contact'}</h2>
        <input placeholder="Name" type="text" name="name" value={name} onChange={onChange}></input>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Email"
        ></input>
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={onChange}
          placeholder="Phone"
        ></input>
        <h5>Contact Type</h5>
        <input
          type='radio'
          name='type'
          value='personal'
          checked={type === 'personal'}
          onChange={onChange}
<<<<<<< HEAD
        >
        </input>
        personal{''}
        <input
          type="radio"
          name="type"
          value="professional"
          checked={type === 'professional'}
          onChange={onChange}
        >
        </input>
        perfessional{''}
=======
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
>>>>>>> ee82a4e6013da683936f511fae3301e020080327
        <input
          type="submit"
          value={current ? 'Edit Contact' : 'Add Contact'}
          className="btn btn-primary btn-block"
        ></input>
        {current && (<div>
          <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>
        </div>)}
      </form>
    </div>
  );
};

export default ContactForm;
