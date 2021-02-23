import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };

  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <ul class='flex-outer'>
          <li>
            <label for="username">
              Username or Email
            </label>
            <input
              type="text"
              name="username"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </li>
          <li>
            <label for="password">
              Password
            </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
          </li>
          <li>
            <button type="submit">Log In</button>
          </li>
        </ul>
      </form>
    </>
  );
}

export default LoginForm;
