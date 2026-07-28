import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

function Logo() {
  return (
    <Link className={styles.mainNavLogo} to="/">
      <img
        className={styles.mainNavLogoImage}
        src="../../../public/assets/argentBankLogo.png"
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
  );
}

export default Logo;
