import { useAppContext } from '../context';
import { InputChangeEvent } from '../shared';
import { debounce } from '../utils';

const SearchInput = () => {
  const { currentPage, totalCount, fetchPerson, searchPerson } = useAppContext();
  const onChange = debounce((e: InputChangeEvent) => searchPerson(e.target.value), 250)

  return (
    <div className="flex flex-col justify-between items-center xl:w-1/5 md:w-1/3 gap-4">
      <div className="flex flex-row justify-between items-center gap-10 w-full">
        <span className="text-mdl font-bold text-gray-60 ">
          Search person
        </span>
        <div>
          <select name="page" className="border border-gray-300 w-20 rounded-md p-1 outline-none" onChange={({ target: { value } }) => fetchPerson(parseInt(value))}>
            {Array.from({ length: Math.ceil(totalCount / 10) },
              (_v, k) => (<option key={`key_${k}`} value={k + 1} className="text-base" selected={currentPage === k + 1}>Page {k + 1}</option>)
            )}
          </select>
        </div>
      </div>
      <input type="text" name="keyword" className="border border-gray-400 w-full rounded-md p-2 outline-none text-gray-600 italic" onChange={onChange} placeholder="type person's name" />
    </div>
  )
}

export default SearchInput