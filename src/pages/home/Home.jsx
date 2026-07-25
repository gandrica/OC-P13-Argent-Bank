import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./Home.module.scss";
function Home() {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <h1>Main Container</h1>
      </main>
      <Footer />
    </>
  );
}

export default Home;
