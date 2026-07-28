import FormComponent from "../../components/formComponent/FormComponent";
import styles from "./Login.module.scss";
function Login() {
  return (
    <main className="main bg-dark">
      <section className={styles.signInContent}>
        <i className="fa fa-user-circle" style={{ fontSize: "16px" }}></i>
        <h1>Sign In</h1>
        <FormComponent />
      </section>
    </main>
  );
}

export default Login;
