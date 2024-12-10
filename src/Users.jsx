import { useState } from "react";
import { useEffect } from "react";
import User from "./User";
import "./Style.css";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="user-container">
      <h1>Users:{users.length}</h1>
      {users.map((user) => (
        <User user={user}> </User>
      ))}
    </div>
  );
}
