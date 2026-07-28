import HeroComponent from "../../components/heroComponent/HeroComponent";
import Features from "../../components/features/Features";
import styles from "./Home.module.scss";
function Home() {
  return (
    <main className={styles.main}>
      <HeroComponent />
      <Features />
    </main>
  );
}

export default Home;
