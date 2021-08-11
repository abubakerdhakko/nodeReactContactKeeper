import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/contactForm';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/Auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser()
  }, [])
  return (
    <div className="grid-2">
      <div className="">
        <ContactForm />
      </div>

      <div className="">
        <div className="">
          <ContactFilter />
        </div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
