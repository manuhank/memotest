import { gql } from "@apollo/client";

export const GET_ALL_MEMOTESTS = (page) => gql`
{
  memotests(first: 5, page: ${page}) {
    data {
      id
      name
      images {
        url
      }
    }
    paginatorInfo {
      hasMorePages
    }
  }
}
`;

export const GET_MEMOTEST_BY_ID = (id) => gql`
  {
    memotest(id:${id}) {
      name
      images {
        url
      }
    }
  }
`;
