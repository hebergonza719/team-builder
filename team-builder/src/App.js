import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';


function App() {
  const [membersList, setMembersList] = useState([
    {
      name: "heber",
      email: "@gmail",
      role: "student"
    }
  ]);

  console.log(membersList);


  return (
    <div className="App">
      <h1>My Team Members</h1>
      <div>
        {membersList.map((member) => {
          return (
            <div>
              <h2>{member.name}</h2>
              <h2>{member.email}</h2>
              <h2>{member.role}</h2>
            </div>
          )
          })}
      </div>
    </div>
  );
}

export default App;
