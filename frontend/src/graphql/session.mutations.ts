import { gql } from "@apollo/client";

export const CREATE_SESSION = gql`
  mutation CreateSession($memotestId: String!) {
    createSession(memotestId: $memotestId) {
      id
    }
  }
`;

export const UPDATE_SESSION_RETRIES = gql`
  mutation UpdateSessionRetries($id: ID!, $retries: Int!) {
    updateSessionRetries(id: $id, retries: $retries) {
      id
    }
  }
`;

export const END_SESSION = gql`
  mutation EndSession($id: ID!, $retries: Int!) {
    endSession(id: $id, retries: $retries) {
      id
    }
  }
`;
