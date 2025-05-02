
import React, { useState } from 'react';

const users = [
  { id: 1, name: "Alice", age: 25, email: "alice@gmail.com" },
  { id: 2, name: "Bob", age: 30, email: "bob@gmail.com" },
  { id: 3, name: "Charlie", age: 22, email: "charlie@gmail.com" }
];

const UserDisplay = () => {
  const [viewMode, setViewMode] = useState("card");

  return (
    <div>
      <button onClick={() => setViewMode(viewMode === "card" ? "table" : "card")}>
        Switch to {viewMode === "card" ? "Table" : "Card"} View
      </button>

      {viewMode === "card" ? (
        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          {users.map((user,index) => (
            <div style={{ border: "1px solid gray", padding: "10px", borderRadius: "8px" }}>
              <h3>Name: {user.name}</h3>
              <p>Age: {user.age}</p>
              <p>Email: {user.email}</p>
            </div>
          ))}
        </div>
      ) : (
        <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
          <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserDisplay;





