import React, { useReducer } from 'react';
import axios from 'axios';
import ContactContext from './ContactContext';
import contactReducer from './ContactReducer';
import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'abubaker',
        email: 'abubaker@gamil.com',
        phone: '090078601',
        type: 'personal',
      },
      {
        id: 2,
        name: 'abubaker2',
        email: 'abubaker2@gamil.com',
        phone: '090078601',
        type: 'personal',
      },
      {
        id: 3,
        name: 'abubaker3',
        email: 'abubaker3@gamil.com',
        phone: '090078601',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
<<<<<<< HEAD
  // get Contacts
  function addContact(contact) {
=======
};
>>>>>>> parent of 6e7ddcb (almost done till auth)

// GET_CONTACTS,
// ADD_CONTACT,
const addContact = (contact) => {
  console.log('addContact', contact);
};
// DELETE_CONTACT,
// SET_CURRENT,
// CLEAR_CURRENT,
// UPDATE_CONTACT,
// FILTER_CONTACTS,
// CLEAR_CONTACTS,
// CLEAR_FILTER,
// CONTACT_ERROR,
export default ContactState;
