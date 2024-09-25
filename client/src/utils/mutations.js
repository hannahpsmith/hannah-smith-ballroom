import { gql } from '@apollo/client';

export const ADD_NOTE = gql`
  mutation addNote($userId: ID!, $content: String!) {
    addNote(userId: $userId, content: $content) {
      _id
      content
      date
    }
  }
`;

export const DELETE_NOTE = gql`
  mutation deleteNote($userId: ID!, $noteId: ID!) {
    deleteNote(userId: $userId, noteId: $noteId) {
      _id
      content
    }
  }
`;

