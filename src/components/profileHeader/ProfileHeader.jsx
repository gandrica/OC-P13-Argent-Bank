import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserProfile } from "../../features/auth/authSlice";
import EditButton from "../editButton/EditButton";
import styles from "./ProfileHeader.module.scss";

function ProfileHeader({ profile }) {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(profile?.firstName || "");
  const [lastName, setLastName] = useState(profile?.lastName || "");

  const dispatch = useDispatch();

  const handleSave = async (e) => {
    e.preventDefault();
    if (firstName.trim() && lastName.trim()) {
      await dispatch(updateUserProfile({ firstName, lastName }));
      setIsEditing(false);
    }
  };

  return (
    <div className={styles.header}>
      {!isEditing ? (
        <>
          <h1>
            Welcome back
            <br />
            {profile?.firstName} {profile?.lastName}!
          </h1>
          <EditButton setIsEditing={setIsEditing} />
        </>
      ) : (
        <>
          <h1>Welcome back</h1>
          <form onSubmit={handleSave} className={styles.editForm}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder={profile?.firstName}
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder={profile?.lastName}
              />
            </div>
            <div className={styles.buttonGroup}>
              <button type="submit" className="saveButton">
                Save
              </button>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default ProfileHeader;
