import styles from "./EditButton.module.scss";
function EditButton({ setIsEditing }) {
  return (
    <button className={styles.editButton} onClick={() => setIsEditing(true)}>
      Edit Name
    </button>
  );
}

export default EditButton;
