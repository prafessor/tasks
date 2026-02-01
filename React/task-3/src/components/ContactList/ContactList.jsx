import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map((el) => (
        <li className={css.item} key={el.id}>
          <Contact contact={el} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
