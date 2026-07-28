import { Link } from "react-router-dom";
import styles from "./SignInButton.module.scss";
function SignInButton() {
  {
    /* <button className="signInButton">Sign In</button> */
  }
  return (
    <Link to="/profile" className={styles.signInButton}>
      Sign In
    </Link>
  );
}

export default SignInButton;
