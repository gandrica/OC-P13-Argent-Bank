import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserProfile } from "../../features/auth/authSlice";
import ProfileHeader from "../../components/profileHeader/ProfileHeader";
import AccountComponent from "../../components/accountComponent/AccountComponent";
import styles from "./Profile.module.scss";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);
  const profile = useSelector((state) => state.auth.profile);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    if (token && !profile) {
      dispatch(fetchUserProfile());
    }
  }, [token, profile, dispatch, navigate]);

  if (!profile) {
    return (
      <main className={styles.main}>
        <h2 style={{ color: "white", textAlign: "center", paddingTop: "2rem" }}>
          Chargement de votre espace...
        </h2>
      </main>
    );
  }
  const accounts = {
    account1: {
      accountTitle: "Argent Bank Checking (x8349)",
      accountAmount: "$2,082.79",
      accountAmountDescription: "Available Balance",
    },
    account2: {
      accountTitle: "Argent Bank Savings (x6712)",
      accountAmount: "$10,928.42",
      accountAmountDescription: "Available Balance",
    },
    account3: {
      accountTitle: "Argent Bank Credit Card (x8349)",
      accountAmount: "$184.30",
      accountAmountDescription: "Current Balance",
    },
  };
  return (
    <main className={styles.main}>
      <ProfileHeader profile={profile} />
      <h2 className="sr-only">Accounts</h2>
      <AccountComponent account={accounts.account1} />
      <AccountComponent account={accounts.account2} />
      <AccountComponent account={accounts.account3} />
    </main>
  );
}

export default Profile;
