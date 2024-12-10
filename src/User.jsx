import "./Style.css";
export default function User({ user }) {
  const { name, email, username, id, phone } = user;
  return (
    <div className="user-container">
      <p>Name:{name}</p>
      <p>Email:{email}</p>
      <p>Username:{username}</p>
      <p>Phone:{phone}</p>
      <p>Id:{id}</p>
    </div>
  );
}
