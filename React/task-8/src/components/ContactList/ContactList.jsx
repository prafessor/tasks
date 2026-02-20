import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
// import { selectFilteredContacts } from "../../redux/contactsSlice";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
// import { selectContacts } from "../../redux/contactsSlice";
// import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectNameFilter);

  // const visibleContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter)
  // );

  // const contacts = useSelector(selectFilteredContacts);
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map((el) => (
        <li className={css.item} key={el.id}>
          <Contact contact={el} />
        </li>
      ))}
    </ul>
  );
}
