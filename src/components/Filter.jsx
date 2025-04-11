import { useDispatch, useSelector } from "react-redux";
import { setFilterQuery } from "../redux/filterSlice";
import { selektFilterQuery } from "../redux/selektor";

export const Filter = () => {
  const filterQuery = useSelector(selektFilterQuery);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        value={filterQuery}
        onChange={(e) => dispatch(setFilterQuery(e.target.value))}
      />
    </div>
  );
};
