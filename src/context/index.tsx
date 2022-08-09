import * as React from "react";

import { useGetAllPeopleLazyQuery, useSearchPeopleLazyQuery } from "../graphql/generated/schema";
import { PeopleContextType, User } from "../shared";

export const PeopleContext = React.createContext<PeopleContextType>({
  currentPage: 0,
  allPeoples: [],
  totalCount: 0,
  isLoading: false,
  setCurrentPage: () => { },
  GetPeoples: () => { },
  fetchPerson: () => { },
  searchPerson: (value: string) => { },
})

export const PeopleProvider = ({ children }: React.PropsWithChildren) => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [allPeoples, setAllPeoples] = React.useState<User[]>([]);
  const [count, setCount] = React.useState(0);

  const [GetPeoples, { loading: isLoading }] = useGetAllPeopleLazyQuery();
  const [Search, { loading: searchLoading }] = useSearchPeopleLazyQuery();

  const searchPerson = async (keyword: string) => {
    const { data } = await Search({ variables: { keyword } })
    setCurrentPage(1);
    setAllPeoples((data?.search?.edges?.slice(0, 10) ?? []) as User[])
  }

  const fetchPerson = async (page: number) => {
    const { data } = await GetPeoples({ variables: { where: { page } } });
    setCurrentPage(page);
    setAllPeoples((data?.users?.edges?.slice(0, 10) ?? []) as User[])
  }

  React.useEffect(() => {
    async function InitialHydration() {
      const { data } = await GetPeoples({ variables: { where: { page: 0 } } });
      setCount(data?.users?.page_info?.totalCount ?? 0)
      setAllPeoples((data?.users?.edges?.slice(0, 10) ?? []) as User[]);
    }

    InitialHydration();
  }, []); // eslint-disable-line

  return (
    <PeopleContext.Provider
      value={{
        currentPage,
        searchPerson,
        fetchPerson,
        isLoading: isLoading || searchLoading,
        setCurrentPage,
        GetPeoples,
        allPeoples,
        totalCount: count,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};

export const useAppContext = () => React.useContext(PeopleContext);
