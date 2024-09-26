import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_NOTES } from '../utils/queries';
import { ADD_NOTE, DELETE_NOTE } from '../utils/mutations';
import { Box, Heading, Textarea, Button, List, ListItem, Flex } from '@chakra-ui/react';

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
    <Box p={6} bg="brand.50" borderRadius="md" boxShadow="lg" maxW='920px' mx='auto' mt={6}>
      <Heading as="h1" size="xl" mb={6} textAlign="center" color="brand.700">
        Lesson Notes
      </Heading>

      <Flex direction="column" align="center" mb={8}>
        <Textarea
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          placeholder="Write your notes here..."
          size="lg"
          resize="vertical"
          mb={4}
          maxW="700px"
        />
        <Button onClick={handleAddNote} bg="#a78f3f" color="brand.50" _hover={{ bg: 'brand.200', color: 'brand.900' }} size="lg">
          Add Note
        </Button>
      </Flex>

      {/* List of notes with a gray box around each individual note */}
      <List spacing={3} maxW="700px" mx="auto">
      {data && data.getNotes ? (
          data.getNotes.map(note => (
            <Box key={note._id} p={4} bg="gray.100" boxShadow="md" borderRadius="md" border="1px solid" borderColor="gray.200" mb={3}>
              <Flex justify="space-between" align="center">
                <Box>
                  {note.content}
                </Box>
                <Button onClick={() => handleDeleteNote(note._id)} colorScheme="red" size="sm">
                  Delete
                </Button>
              </Flex>
            </Box>
          ))
        ) : (
          <p>No notes available</p>
        )}

      </List>
    </Box>
  );
};

export default Notes;
