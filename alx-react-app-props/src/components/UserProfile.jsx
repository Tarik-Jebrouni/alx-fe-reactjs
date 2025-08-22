import { useContext } from "react";
import UserContext from "./UserContext";

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "20px auto",
        width: "300px",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ color: "blue" }}>{userData.name}</h2>
      <p>
        Age: <span style={{ fontWeight: "bold" }}>{userData.age || "N/A"}</span>
      </p>
      <p>Bio: {userData.bio || "N/A"}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
