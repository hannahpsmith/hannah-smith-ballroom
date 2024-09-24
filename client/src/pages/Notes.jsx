import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h1>Notes</h1>
      <p>All the important notes...</p>
    </div>
  );
};

export default Notes;
