import { useState } from "react";
import initialContacts from "../contactsList.json";
import "./App.css";
import SearchField from "./components/SearchField/SearchField";
import ContactForm from "./components/ContactForm/ContactForm";
import Contact from "./components/Contact/Contact";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(initialContacts);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchField />
      <ContactList />
    </>
  );
}

export default App;
