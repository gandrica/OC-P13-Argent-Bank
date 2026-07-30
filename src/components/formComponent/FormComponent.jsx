import { useState } from "react";
import SignInButton from "../signInButton/SignInButton";
import styles from "./FormComponent.module.scss";
function FormComponent() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form>
      <div className={styles.inputWrapper}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value.trim().toLowerCase())}
          id="username"
        />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value.trim().toLowerCase())}
          id="password"
        />
      </div>
      <div className={styles.inputRemember}>
        <input type="checkbox" id="rememberMe" />
        <label htmlFor="rememberMe">Remember me</label>
      </div>

      <SignInButton login={{ email: userName, password }} />
    </form>
  );
}

export default FormComponent;
