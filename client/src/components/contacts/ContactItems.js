import React from 'react';
import PropType from 'prop-types'
const ContactItems = ({ contact }) => {
  const { id, name, email, phone, type } = contact;

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
        </ul>
        <button className="btn btn-dark btn-sm">Edit</button>
        <button className="btn btn-danger btn-sm">Delete</button>
      </div>
    </div>
  );
};

ContactItems.propType = {
  contact: PropType.object.isRequired
}

export default ContactItems;
