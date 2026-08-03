import HeroComponent from "../../components/heroComponent/HeroComponent";
import FeaturesComponent from "../../components/featuresComponent/FeaturesComponent";
import styles from "./Home.module.scss";

function Home() {
  return (
    <main className={styles.main}>
      <HeroComponent />
      <FeaturesComponent />
    </main>
  );
}

export default Home;
