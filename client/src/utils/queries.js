import { gql } from '@apollo/client';

export const GET_NOTES = gql`
  query getNotes($userId: ID!) {
    getNotes(userId: $userId) {
      _id
      content
      date
    }
  }
`;
