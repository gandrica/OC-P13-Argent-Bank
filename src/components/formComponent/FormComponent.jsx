import SignInButton from "../signInButton/SignInButton";
import styles from "./FormComponent.module.scss";
function FormComponent() {
  return (
    <form>
      <div className={styles.inputWrapper}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div className={styles.inputRemember}>
        <input type="checkbox" id="rememberMe" />
        <label htmlFor="rememberMe">Remember me</label>
      </div>

      <SignInButton />
    </form>
  );
}

export default FormComponent;
