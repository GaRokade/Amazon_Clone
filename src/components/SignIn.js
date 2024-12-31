import React, { useState } from 'react';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = () => {
    // Here you can implement your sign-in logic, for example, calling an API
    // For this example, let's just log the email and password
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Name:',name);

    // Resetting fields after sign in attempt
    setEmail('');
    setPassword('');
    setName('')
    };

  return (
    <div>
      <h2>Sign In</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
        />
       
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Name:</label>
          <input type='name'
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
        
      </div>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default SignIn;
