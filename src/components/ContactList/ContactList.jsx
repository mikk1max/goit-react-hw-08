import React from "react";
import Contact from "./Contact/Contact";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";
import {
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";

const ContactList = ({ onEdit }) => {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);

  return (
    <ul className={s.contactList}>
      {!loading ? (
        contacts.map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onEdit={onEdit}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </ul>
  );
};

export default ContactList;
