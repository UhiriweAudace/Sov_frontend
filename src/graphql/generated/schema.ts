import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type PageInfo = {
  totalCount: Scalars['Int'];
};

export type Query = {
  search?: Maybe<UserResponse>;
  users?: Maybe<UserResponse>;
};


export type QuerySearchArgs = {
  keyword: Scalars['String'];
};


export type QueryUsersArgs = {
  where?: InputMaybe<UserFilter>;
};

export type User = {
  gender?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  homeworld?: Maybe<Scalars['String']>;
  mass?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type UserFilter = {
  page: Scalars['Int'];
};

export type UserResponse = {
  edges: Array<Maybe<User>>;
  page_info?: Maybe<PageInfo>;
};

export type SearchPeopleQueryVariables = Exact<{
  keyword: Scalars['String'];
}>;


export type SearchPeopleQuery = { search?: { page_info?: { totalCount: number } | null, edges: Array<{ name: string, gender?: string | null, height?: string | null, mass?: string | null, homeworld?: string | null } | null> } | null };

export type GetAllPeopleQueryVariables = Exact<{
  where?: InputMaybe<UserFilter>;
}>;


export type GetAllPeopleQuery = { users?: { page_info?: { totalCount: number } | null, edges: Array<{ name: string, height?: string | null, mass?: string | null, gender?: string | null, homeworld?: string | null } | null> } | null };


export const SearchPeopleDocument = gql`
    query SearchPeople($keyword: String!) {
  search(keyword: $keyword) {
    page_info {
      totalCount
    }
    edges {
      name
      gender
      height
      mass
      homeworld
    }
  }
}
    `;

/**
 * __useSearchPeopleQuery__
 *
 * To run a query within a React component, call `useSearchPeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPeopleQuery({
 *   variables: {
 *      keyword: // value for 'keyword'
 *   },
 * });
 */
export function useSearchPeopleQuery(baseOptions: Apollo.QueryHookOptions<SearchPeopleQuery, SearchPeopleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchPeopleQuery, SearchPeopleQueryVariables>(SearchPeopleDocument, options);
      }
export function useSearchPeopleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchPeopleQuery, SearchPeopleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchPeopleQuery, SearchPeopleQueryVariables>(SearchPeopleDocument, options);
        }
export type SearchPeopleQueryHookResult = ReturnType<typeof useSearchPeopleQuery>;
export type SearchPeopleLazyQueryHookResult = ReturnType<typeof useSearchPeopleLazyQuery>;
export type SearchPeopleQueryResult = Apollo.QueryResult<SearchPeopleQuery, SearchPeopleQueryVariables>;
export const GetAllPeopleDocument = gql`
    query GetAllPeople($where: UserFilter) {
  users(where: $where) {
    page_info {
      totalCount
    }
    edges {
      name
      height
      mass
      gender
      homeworld
    }
  }
}
    `;

/**
 * __useGetAllPeopleQuery__
 *
 * To run a query within a React component, call `useGetAllPeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPeopleQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetAllPeopleQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPeopleQuery, GetAllPeopleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPeopleQuery, GetAllPeopleQueryVariables>(GetAllPeopleDocument, options);
      }
export function useGetAllPeopleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPeopleQuery, GetAllPeopleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPeopleQuery, GetAllPeopleQueryVariables>(GetAllPeopleDocument, options);
        }
export type GetAllPeopleQueryHookResult = ReturnType<typeof useGetAllPeopleQuery>;
export type GetAllPeopleLazyQueryHookResult = ReturnType<typeof useGetAllPeopleLazyQuery>;
export type GetAllPeopleQueryResult = Apollo.QueryResult<GetAllPeopleQuery, GetAllPeopleQueryVariables>;