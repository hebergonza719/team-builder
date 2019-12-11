import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import TeamMembers from './components/TeamMembers';
import Form from './components/Form';


function App() {
  const [membersList, setMembersList] = useState([
    {
      name: "Heber Gonzalez",
      email: "hebergonza@gmail.com",
      role: "student"
    }
  ]);

  console.log(membersList);

  const addNewMember = member => {

    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    }

    const newMembersList = [...membersList, newMember];

    setMembersList(newMembersList);

  }


  return (
    <div className="App">
      <h1>My Team Members</h1>
      {/* <div>
        {membersList.map((member) => {
          return (
            <div>
              <h2>{member.name}</h2>
              <h2>{member.email}</h2>
              <h2>{member.role}</h2>
            </div>
          )
          })}
      </div> */}
      <Form addNewMember={addNewMember} />
      <TeamMembers teamMembers={membersList} />
    </div>
  );
}

export default App;
