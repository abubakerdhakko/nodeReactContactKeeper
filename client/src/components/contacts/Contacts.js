import React, { Fragment, useContext, useEffect } from 'react';

import ContactContext from '../../context/contact/ContactContext';
import ContactItems from '../contacts/ContactItems';
import { uuid } from 'uuidv4';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, } = contactContext;

  return (
    <Fragment>
      {filtered !== null
        ?

        filtered.map((contact) => (
          <ContactItems key={uuid()} contact={contact}></ContactItems>
        ))
        : contacts.map((contact) => (
          <ContactItems key={uuid()} contact={contact}></ContactItems>
        ))

      }
    </Fragment>
  );
};

export default Contacts;
