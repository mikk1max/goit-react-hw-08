import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import s from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <main className={s.contactsContainer}>
      <h1 style={{ textAlign: "center" }}>Phonebook</h1>
      <section className={s.formSection}>
        <div className={s.formSectionDiv}>
          <img src="/meme.jpg" />
        </div>
        <div className={s.formSectionDiv}>
          <ContactForm contact={editingContact} onReset={() => setEditingContact(null)}/>
        </div>
      </section>
      <section>
        <SearchBox />
        <ContactList onEdit={setEditingContact} />
      </section>
    </main>
  );
};

export default ContactsPage;
