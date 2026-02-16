import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox({ value, onInput }) {
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    dispatch(changeFilter(evt.target.value.toLowerCase()));
    onInput(evt.target.value.toLowerCase());
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="searched-name"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
