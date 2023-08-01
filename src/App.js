import { useState } from "react";
import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";
import Wrapper from "./components/UI/Wrapper";

function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <Wrapper>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </Wrapper>
  );
}

export default App;
