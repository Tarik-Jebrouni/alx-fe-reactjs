const UserProfile = (props) => {
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
      <h2 style={{ color: "blue", fontSize: "22px" }}>{props.name}</h2>
      <p>
        Age: <span style={{ fontWeight: "bold" }}>{props.age}</span>
      </p>
      <p>
        Bio: <span style={{ fontStyle: "italic" }}>{props.bio}</span>
      </p>
    </div>
  );
};

export default UserProfile;
