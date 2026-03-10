import type { ContactType } from "../../types";

interface ContactProps {
  contact: ContactType;
  onDelete: (id: string) => void;
}

export default function Contact({ contact, onDelete }: ContactProps) {
  return (
    <>
      <div>
        <span>{contact.name}</span>
        <span>{contact.number}</span>
      </div>
      <button type="button" onClick={() => onDelete(contact.id)}>Delete</button>
    </>
  );
}
