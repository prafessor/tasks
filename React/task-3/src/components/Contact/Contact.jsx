import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <>
      <ul className={css.list}>
        <li>{name}</li>
        <li>{number}</li>
      </ul>
      <button className="btn" type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
}
