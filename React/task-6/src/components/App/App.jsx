import { useState } from "react";
import "./App.css";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

export default function App() {
  const [searchedName, setSearchedName] = useState("");

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={searchedName} onInput={setSearchedName} />
      <ContactList />
    </div>
  );
}
