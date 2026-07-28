import Logo from "../logo/Logo";
import MainNavigationItem from "../mainNavigationItem/MainNavigationItem";
import styles from "./MainNavigation.module.scss";
function MainNavigation() {
  return (
    <nav className={styles.mainNav}>
      <Logo />
      <MainNavigationItem />
    </nav>
  );
}

export default MainNavigation;
