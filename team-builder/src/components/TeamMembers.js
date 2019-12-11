import React from "react";

const TeamMembers = (props) => {
  return (
    <div className="member">
      {props.teamMembers.map(member => {
        return (
          <div>
            <h2>Name: {member.name}</h2>
            <h2>Email: {member.email}</h2>
            <h2>Role: {member.role}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default TeamMembers;