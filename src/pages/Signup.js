import React from 'react';
export default function Signup() {
  return (
    <div>
      <h1>Signup</h1>
      <form>
        <input type='text' placeholder='Full Name' /><br/>
        <input type='email' placeholder='Email' /><br/>
        <input type='password' placeholder='Password' /><br/>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}