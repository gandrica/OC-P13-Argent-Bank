import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { profile_search } from "../../features/authentification/authentificationSlice";
import styles from "./MainNavigationItem.module.scss";

function MainNavigationItem() {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  return (
    <div>
      {!profile.firstName && (
        <Link className={styles.mainNavItem} to="/login">
          <i
            className="fa fa-user-circle"
            style={{ marginRight: "0.2rem" }}
          ></i>
          Sign In
        </Link>
      )}
      {profile.firstName && (
        <div>
          <Link className={styles.mainNavItem} to="/profile">
            <i
              className="fa fa-user-circle"
              style={{ marginRight: "0.2rem" }}
            ></i>
            {profile.firstName}
          </Link>
          <Link
            className={styles.mainNavItem}
            onClick={() => {
              dispatch(profile_search(""));
            }}
            to="/"
          >
            <i className="fa fa-sign-out" style={{ marginRight: "0.2rem" }}></i>
            Sign Out
          </Link>
        </div>
      )}
    </div>
  );
}

export default MainNavigationItem;
