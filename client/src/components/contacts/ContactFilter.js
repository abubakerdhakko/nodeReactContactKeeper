import React, { useContext, useEffect, useRef, filtered } from 'react'
import ContactContext from '../../context/contact/ContactContext'

const ContactFilter = () => {
    const contactContext = useContext(ContactContext)

    const { filterContact, clearFilter } = contactContext;
    const text = useRef('');
    useEffect(() => {
        if (filtered === null) {
            text.current.value = ''
        }

    });
    const onChange = e => {
        if (text.current.value !== '') {
            filterContact(e.target.value)
        } else {
            clearFilter();

        }
    }



    return (
        <div>
            <form >
                <input ref={text} type="text" onChange={onChange} placeholder="Filter Contacts....."></input>
            </form>
        </div>
    )
}

export default ContactFilter;