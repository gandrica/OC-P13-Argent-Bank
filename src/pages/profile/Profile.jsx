import { useSelector } from "react-redux";
import ProfileHeader from "../../components/profileHeader/ProfileHeader";
import AccountComponent from "../../components/accountComponent/AccountComponent";

function Profile() {
  const profile = useSelector((state) => state.profile);
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
    <main className="main bg-dark">
      <ProfileHeader profile={profile} />
      <h2 className="sr-only">Accounts</h2>
      <AccountComponent account={accounts.account1} />
      <AccountComponent account={accounts.account2} />
      <AccountComponent account={accounts.account3} />
    </main>
  );
}

export default Profile;
