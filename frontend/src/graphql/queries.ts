import { gql } from "@apollo/client";

export const GET_ALL_MEMOTESTS = () => gql`
  {
    memotests {
      id
      name
      urls
    }
  }
`;

export const GET_MEMOTEST_BY_ID = (id) => gql`
  {
    memotest(id:${id}) {
      name
      urls
    }
  }
`;
