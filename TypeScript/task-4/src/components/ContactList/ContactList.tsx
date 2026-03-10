import type { ContactType } from "../../types";
import Contact from "../Contact/Contact";

interface ContactListProps {
  contacts: ContactType[];
  onDelete: (id: string) => void;
}

export default function ContactList({ contacts, onDelete }: ContactListProps) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
