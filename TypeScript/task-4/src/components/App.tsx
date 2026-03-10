import { useEffect, useState } from "react";
import type { ContactType } from "../types"
import ContactList from "./ContactList/ContactList"
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";


const contactsBase: ContactType[] = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const contactsFromLS = localStorage.getItem("contacts");
    if(contactsFromLS !== null) {
      return JSON.parse(contactsFromLS) as ContactType[];
    }
    return contactsBase;
  })
  const [filter, setFilter] = useState("");

  const addContact = (newContact: ContactType) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    })
  }

  const onDelete = (id: string) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id))
  }

  useEffect(() => {
    try {
      localStorage.setItem("contacts", JSON.stringify(contacts))
    } catch (error) {
      console.log(error);
    }
  }, [contacts])

  const changeFilter = (value: string) => {
    setFilter(value);
  }

  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDelete={onDelete} /> 
    </div>
  )
}

