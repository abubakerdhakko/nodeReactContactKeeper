import React, { Fragment, useContext, useEffect } from 'react';

import ContactContext from '../../context/contact/ContactContext';
import ContactItems from '../contacts/ContactItems';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;

  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItems key={contact.id} contact={contact}></ContactItems>
      ))}
    </Fragment>
  );
};

export default Contacts;
