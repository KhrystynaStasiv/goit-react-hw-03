import css from "./SearchBox.module.css";

const SearchField = ({ value, onFilter }) => {
  return (
    <div className={css["search-box"]}>
      <p className={css.text}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};
export default SearchField;
