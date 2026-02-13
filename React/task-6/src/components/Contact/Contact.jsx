import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const hadleDeleteClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ul className={css.list}>
        <li>{name}</li>
        <li>{number}</li>
      </ul>
      <button className="btn" type="button" onClick={hadleDeleteClick}>
        Delete
      </button>
    </>
  );
}
