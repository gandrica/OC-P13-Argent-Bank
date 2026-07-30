import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchLogin } from "../../features/auth/authSlice";
import styles from "./SignInButton.module.scss";
function SignInButton({ login }) {
  const { email, password } = login;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await dispatch(fetchLogin({ email, password })).unwrap();
      navigate("/profile");
    } catch (error) {
      console.error(
        "Identifiants incorrects, on ne change pas de page.",
        error,
      );
    }
  };
  return (
    <button onClick={handleLogin} className={styles.signInButton}>
      Sign In
    </button>
  );
}

export default SignInButton;
