import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contatcsOps";

export default function App() {
  const dispatch = useDispatch();

  const [searchedName, setSearchedName] = useState("");

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={searchedName} onInput={setSearchedName} />
      <ContactList />
    </div>
  );
}
