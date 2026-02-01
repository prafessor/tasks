import { useEffect, useState } from 'react'
import './App.css'
import baseContacts from "../../contacts.json";
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';

const loadContactsFromLS = () => {
  const response = localStorage.getItem("contactsList");

  if(response === null) {
    return baseContacts;
  }

  return JSON.parse(response);
}

export default function App() {
  const [ contacts, setContacts ] = useState(loadContactsFromLS);
  const [ searchedName, setSearchedName ] = useState("");

  console.log(contacts)


  useEffect(() => {
    localStorage.setItem("contactsList", JSON.stringify(contacts));
  },[contacts]);

  const addContact = (contact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, contact];
    });
  }
  
  const removeContact = (contactId) => {
    setContacts(contacts.filter(el => el.id !== contactId));
  }

  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchedName));

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox value={searchedName} onInput={setSearchedName} />
      <ContactList contacts={visibleContacts} onDelete={removeContact} />
    </div>
  )
}

