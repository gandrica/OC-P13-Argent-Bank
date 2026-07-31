import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import styles from "./MainNavigationItem.module.scss";

function MainNavigationItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const firstName = useSelector((state) => state.auth.profile?.firstName);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className={styles.mainNavItemContainer}>
      {/* Si l'utilisateur N'EST PAS connecté */}
      {!firstName && (
        <Link className={styles.mainNavItem} to="/login">
          <i
            className="fa fa-user-circle"
            style={{ marginRight: "0.4rem", fontSize: "1.1rem" }}
          ></i>
          Sign In
        </Link>
      )}
      {firstName && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link className={styles.mainNavItem} to="/profile">
            <i
              className="fa fa-user-circle"
              style={{ marginRight: "0.4rem", fontSize: "1.1rem" }}
            ></i>
            {firstName}
          </Link>
          <Link className={styles.mainNavItem} to="/" onClick={handleLogout}>
            <i className="fa fa-sign-out" style={{ marginRight: "0.2rem" }}></i>
            Sign Out
          </Link>
        </div>
      )}
    </div>
  );
}

export default MainNavigationItem;
