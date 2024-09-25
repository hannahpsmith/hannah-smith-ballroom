import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_NOTES } from '../utils/queries';
import { ADD_NOTE, DELETE_NOTE } from '../utils/mutations';

const Notes = () => {
  const [noteContent, setNoteContent] = useState('');
  const navigate = useNavigate();

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token || !userId) {
      navigate('/login');
    }
  }, [userId, navigate]);

  const { loading, error, data, refetch } = useQuery(GET_NOTES, {
    variables: { userId },
    skip: !userId,
  });
  
  const [addNote] = useMutation(ADD_NOTE);
  const [deleteNote] = useMutation(DELETE_NOTE);

  const handleAddNote = async () => {
    try {
      await addNote({
        variables: { userId, content: noteContent },
      });
      setNoteContent('');
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteNote = async (noteId) => {
    try {
      await deleteNote({
        variables: { userId, noteId },
      });
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching notes</p>;

  return (
    <div>
      <h1>Notes</h1>

      {}
      <textarea
        value={noteContent}
        onChange={(e) => setNoteContent(e.target.value)}
        placeholder="Write your notes here..."
      />
      <button onClick={handleAddNote}>Add Note</button>

      {}
      <ul>
        {data.getNotes.map(note => (
          <li key={note._id}>
            {note.content}
            <button onClick={() => handleDeleteNote(note._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
