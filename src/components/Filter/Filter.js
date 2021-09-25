import { useDispatch } from "react-redux";
import style from "../Filter/Filter.module.css";
import { changeFilter } from "redux/contacts/contactsActions";

function Filter({ value }) {
  const dispatch = useDispatch();

  const onFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label className={style.contactsFilterLabel}>
      <span className={style.contactsFilterLabelText}>
        Find contacts by name
      </span>
      <input
        type="text"
        value={value}
        className={style.contactsFilterInput}
        onChange={onFilterChange}
      />
    </label>
  );
}

export default Filter;
