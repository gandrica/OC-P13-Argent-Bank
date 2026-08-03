import FormComponent from "../../components/formComponent/FormComponent";
import styles from "./Login.module.scss";
function Login() {
  return (
    <main className={styles.main}>
      <section className={styles.signInContent}>
        <i className="fa fa-user-circle"></i>
        <h1>Sign In</h1>
        <FormComponent />
      </section>
    </main>
  );
}

export default Login;
