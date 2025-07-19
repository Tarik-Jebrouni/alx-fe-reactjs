import UserContext from "./components/UserContext";
import UserProfile from "./components/UserProfile";

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    age: 28,
    bio: "Front-end developer at ALX",
  };

  return (
    <UserContext.Provider value={userData}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
