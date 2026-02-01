import css from "./SearchBox.module.css";

export default function SearchBox({ value, onInput }) {

    const handleChange = (evt) => {
        onInput(evt.target.value.toLowerCase());
    };

    return (
        <div>
            <p>Find contacts by name</p>
            <input className={css.input} type="text" name="searched-name" value={value} onChange={handleChange} />
        </div>
    );
}