import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context";
import { InputChangeEvent, SelectChangeEvent } from "../shared";
import { debounce } from "../utils";

const SearchInput = () => {
  const { currentPage, totalCount, fetchPerson, searchPerson } = useAppContext();
  let navigate = useNavigate();
  const onSearchHandler = debounce((e: InputChangeEvent) => {
    navigate("/");
    searchPerson(e.target.value.trim())
  }, 250);

  const onChangePageHandler = (e: SelectChangeEvent) => {
    navigate("/");
    fetchPerson(parseInt(e.target.value))
  }

  return (
    <div className="flex flex-col items-center justify-between gap-4 md:w-1/3 xl:w-1/5">
      <div className="flex w-full flex-row items-center justify-between gap-10">
        <span className="text-mdl text-gray-60 font-bold ">Search person</span>
        <div>
          <select
            name="page"
            onChange={onChangePageHandler}
            className="w-20 rounded-md border border-gray-300 p-1 outline-none"
          >
            {Array.from({ length: Math.ceil(totalCount / 10) }, (_v, k) => (
              <option
                value={k + 1}
                key={`key_${k}`}
                className="text-base"
                selected={currentPage === k + 1}
              >
                Page {k + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
      <input
        type="text"
        name="keyword"
        onChange={onSearchHandler}
        placeholder="type person's name"
        className="w-full rounded-md border border-gray-400 p-2 italic text-gray-600 outline-none"
      />
    </div>
  );
};

export default SearchInput;
