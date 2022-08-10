import { RiArrowLeftCircleLine } from "react-icons/ri";
import {
  Outlet,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loader from "./components/Loader";
import Pagination from "./components/Pagination";
import People from "./components/People";
import SearchInput from "./components/SearchInput";
import { useAppContext } from "./context";

const Layout = () => {
  return (
    <div className="flex min-h-full flex-col items-center gap-3 py-8">
      <SearchInput />
      <hr className="mt-4 w-full border bg-gray-600" />
      <Outlet />
    </div>
  );
};

const PeopleDetails = () => {
  let navigate = useNavigate();
  const { personName } = useParams();
  const { allPeoples } = useAppContext();
  const user = allPeoples.find((people) => people.name === personName);
  return (
    <div className="flex w-full flex-col items-center gap-5">
      <div
        className="flex w-1/2 cursor-pointer items-center justify-start gap-2"
        onClick={() => navigate("/")}
      >
        <RiArrowLeftCircleLine size={30} />{" "}
        <span className="text-base font-bold">Back</span>
      </div>
      <div className="w-max">
        {user && <People user={user} showMoreDetails />}
      </div>
    </div>
  );
};

const Peoples = () => {
  const { totalCount, fetchPerson, allPeoples, isLoading } = useAppContext();
  const render = isLoading ? (
    <Loader />
  ) : (
    allPeoples.map((user) => <People user={user} />)
  );

  return (
		<>
			<div className="mb-7 flex h-full  max-w-6xl flex-wrap items-center justify-center gap-8 p-4">
				{render}
			</div>
			<Pagination
				totalPageNumber={Math.ceil(totalCount / 10)}
				fetchPerson={fetchPerson}
			/>
		</>
	);
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Peoples />} />
        <Route path="/details/:personName" element={<PeopleDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
