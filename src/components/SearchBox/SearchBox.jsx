import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import {
  changeFilterName,
  changeFilterNumber,
} from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.SearchBoxContainer}>
      <label className={s.searchField}>
        <span>Find contacts by name:</span>
        <input
          type="text"
          onChange={(e) => dispatch(changeFilterName(e.target.value))}
        />
      </label>
      <label className={s.searchField}>
        <span>Find contacts by number:</span>
        <input
          type="text"
          onChange={(e) => dispatch(changeFilterNumber(e.target.value))}
        />
      </label>
    </div>
  );
};

export default SearchBox;
