import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/contactForm';
const Home = () => {
  return (
    <div className="grid-2">
      <div className="">
        <ContactForm />
      </div>
      <div className="">
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
