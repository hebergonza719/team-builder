import React, { useState } from 'react';

const Form = ({ addNewMember }) => {

  const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChanges = (event) => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();

    addNewMember(member);

    setMember({name: "", email: "", role: ""})
  }

  console.log(member);
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Enter a name"
        onChange={handleChanges}
        value={member.name}
      />
      
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Enter an email"  
        onChange={handleChanges}
        value={member.email}
      />
      
      <label htmlFor="role">Role</label>
      <input
        id="role"
        type="text"
        name="role"
        placeholder="Enter a role"
        onChange={handleChanges}
        value={member.role}
      />
      
      <button type="submit">Add Member</button>
    </form>
  )
}

export default Form;