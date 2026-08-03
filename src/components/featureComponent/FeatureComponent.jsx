import styles from "./FeatureComponent.module.scss";
function FeatureComponent({ feature }) {
  return (
    <div className={styles.featureItem}>
      <img src={feature.img} alt="Chat Icon" className={styles.featureIcon} />
      <h3 className={styles.featureItemTitle}>{feature.headerText}</h3>
      <p className={styles.featureItemDescription}>{feature.paragraphText}</p>
    </div>
  );
}

export default FeatureComponent;
