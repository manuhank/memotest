import { gql } from "@apollo/client";

export const GET_ALL_MEMOTESTS = gql`
  {
    memotests {
      name,
      urls
    }
  }
`;
