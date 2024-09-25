import React, { useState } from 'react';

const LOGIN_MUTATION = `
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

const SIGNUP_MUTATION = `
  mutation signup($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: LOGIN_MUTATION,
          variables: { email, password },
        }),
      });

      const { data } = await response.json();
      if (data && data.login && data.login.token) {
        // Store both token and userId in localStorage
        localStorage.setItem('token', data.login.token);
        localStorage.setItem('userId', data.login.user._id);
        console.log('Login successful!');
      } else {
        setError('Invalid login');
      }
    } catch (error) {
      setError('Login failed, please try again.');
      console.error(error);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: SIGNUP_MUTATION,
          variables: { email, password },
        }),
      });

      const { data } = await response.json();
      if (data && data.signup && data.signup.token) {
        localStorage.setItem('token', data.signup.token);
        localStorage.setItem('userId', data.signup.user._id);
        console.log('Sign Up successful!');
      } else {
        setError('Sign up failed');
      }
    } catch (error) {
      setError('Sign up failed, please try again.');
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login or Sign Up</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="button" onClick={handleLogin}>Login</button>
        <button type="submit" onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
};

export default Login;
