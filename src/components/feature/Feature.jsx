import styles from "./Feature.module.scss";
function Feature({ feature }) {
  return (
    <div className={styles.featureItem}>
      <img src={feature.img} alt="Chat Icon" className={styles.featureIcon} />
      <h3 className={styles.featureItemTitle}>{feature.headerText}</h3>
      <p>{feature.paragraphText}</p>
    </div>
  );
}

export default Feature;
