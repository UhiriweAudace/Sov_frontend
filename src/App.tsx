import Pagination from "./components/Pagination";
import People from "./components/People";
import SearchInput from "./components/SearchInput";
import { useAppContext } from "./context";


const App = () => {
  const { totalCount, fetchPerson, allPeoples } = useAppContext();
  return (
    <div className="flex flex-col items-center min-h-screen gap-3 mt-20">
      <SearchInput />
      <div className=" flex max-w-6xl p-4 gap-5 items-center justify-center flex-wrap mb-7">
        {allPeoples.map((user) => (<People user={user} />))}
      </div>
      <Pagination totalPageNumber={Math.ceil(totalCount / 10)} fetchPerson={fetchPerson} />
    </div >
  );
}

export default App;
