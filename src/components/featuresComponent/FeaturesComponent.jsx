import FeatureComponent from "../featureComponent/FeatureComponent";
import styles from "./FeaturesComponent.module.scss";

function FeaturesComponent() {
  const features = {
    feature1: {
      img: "../../../public/assets/icon-chat.png",
      headerText: "You are our #1 priority",
      paragraphText:
        "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    feature2: {
      img: "../../../public/assets/icon-money.png",
      headerText: "More savings means higher rates",
      paragraphText:
        "The more you save with us, the higher your interest rate will be!",
    },
    feature3: {
      img: "../../../public/assets/icon-security.png",
      headerText: "Security you can trust",
      paragraphText:
        "We use top of the line encryption to make sure your data and money is always safe.",
    },
  };
  return (
    <section className={styles.features}>
      <h2 className="sr-only">Features</h2>
      <FeatureComponent feature={features.feature1} />
      <FeatureComponent feature={features.feature2} />
      <FeatureComponent feature={features.feature3} />
    </section>
  );
}

export default FeaturesComponent;
