import { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const initialState = {
  username: "",
  age: "",
};

const AddUser = (props) => {
  const [userData, setUserData] = useState(initialState);
  const [error, setError] = useState("");

  const addUserhandler = (event) => {
    event.preventDefault();
    if (
      userData.username.trim().length === 0 ||
      userData.age.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+userData.age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(userData.username, userData.age);
    setUserData(initialState);
  };

  const inputChangeHandler = (event) => {
    setUserData((prevState) => {
      return { ...prevState, [event.target.id]: event.target.value };
    });
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserhandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={userData.username}
            type="text"
            onChange={inputChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            value={userData.age}
            type="number"
            onChange={inputChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
