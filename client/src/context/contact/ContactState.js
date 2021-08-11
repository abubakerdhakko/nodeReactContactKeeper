import React, { useReducer } from 'react';
import axios from 'axios';
import { v4 as uuid_v4 } from "uuid";

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
    current: null,
    filtered: null,
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);
  // GET_CONTACTS,
  // ADD_CONTACT,
  const addContact = (contact) => {
    contact.id = uuid_v4();
    dispatch({ type: ADD_CONTACT, payload: contact })
    console.log('addContact')

  };
  // DELETE_CONTACT,
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id })
    console.log('deleteContact')
  };
  // SET_CURRENT,
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact })
  };
  // CLEAR_CURRENT,
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  };
  // UPDATE_CONTACT,
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact })
    console.log('updateContact')

  };
  // FILTER_CONTACTS,
  const filterContact = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text })
    console.log('FILTER_CONTACTS', text)
  };
  // CLEAR_FILTER
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
    console.log('CLEAR_FILTER')
  };
  // CONTACT_ERROR,

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        setCurrent,
        clearCurrent,
        addContact,
        deleteContact,
        updateContact,
        filterContact,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
  // get Contacts
  function addContact(contact) {
  
  

    dispatch({
      type: 'ADD_CONTACT',
      payload: contact
    });
  } 
  // clear current
  function clearContacts() {
    dispatch({
      type: 'CLEAR_CONTACTS'
    });
  } 
};

export default ContactState;
