import React from 'react';
export default function PostRequirement() {
  return (
    <div>
      <h1>Post Your Requirement</h1>
      <form>
        <input type='text' placeholder='Name' /><br/>
        <input type='text' placeholder='Age' /><br/>
        <input type='text' placeholder='City' /><br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}