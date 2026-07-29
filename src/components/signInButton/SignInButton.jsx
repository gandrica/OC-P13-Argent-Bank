import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { profile_search } from "../../features/authentification/authentificationSlice";
import styles from "./SignInButton.module.scss";
function SignInButton() {
  const dispatch = useDispatch();
  {
    /* <button className="signInButton">Sign In</button> */
  }
  // { firstName: "Tony", lastName: "Jarvis" }
  return (
    <Link
      to="/profile"
      onClick={() =>
        dispatch(profile_search({ firstName: "Tony", lastName: "Jarvis" }))
      }
      className={styles.signInButton}
    >
      Sign In
    </Link>
  );
}

export default SignInButton;
