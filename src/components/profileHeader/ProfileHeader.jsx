import EditButton from "../editButton/EditButton";
import styles from "./ProfileHeader.module.scss";
function ProfileHeader({ profile }) {
  const { firstName, lastName } = profile;
  return (
    <div className={styles.header}>
      <h1>
        Welcome back
        <br />
        {firstName} {lastName}!
      </h1>
      <EditButton />
    </div>
  );
}

export default ProfileHeader;
