import React, { useContext } from 'react';
import PropType from 'prop-types'
import ContactContext from '../../context/contact/ContactContext'
import { SET_CURRENT } from '../../context/types';
const ContactItems = ({ contact }) => {
  const { id, name, email, phone, type } = contact;
  const contactContext = useContext(ContactContext)
  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const onDelete = () => {
    deleteContact(contact.id)
    // clearCurrent()
  }


  return (
    <div className="card bg-light">
      <div className="text-primary text-left">
        {name}
        {''}
        <span
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type}
        </span>
        <ul>
          {email && <li className="fa fa-envelope"> {email}</li>}
          <br />
          {phone && <li className="fa fa-phone "> {phone}</li>}
          <br />
          {id && <li className="fa fa-phone "> {id}</li>}
        </ul>
        <button className="btn btn-dark btn-sm" onClick={() => setCurrent(contact)}>Edit</button>
        <button className="btn btn-danger btn-sm" onClick={onDelete} >Delete</button>
      </div>
    </div>
  );
};

ContactItems.propType = {
  contact: PropType.object.isRequired
}

export default ContactItems;
