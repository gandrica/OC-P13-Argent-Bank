import { Link } from "react-router-dom";
import styles from "./MainNavigationItem.module.scss";

function MainNavigationItem() {
  return (
    <div>
      <Link className={styles.mainNavItem} to="/login">
        <i className="fa fa-user-circle" style={{ marginRight: "0.2rem" }}></i>
        Sign In
      </Link>
    </div>
  );
}

export default MainNavigationItem;
