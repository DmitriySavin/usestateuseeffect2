import styles from "./contact.module.css";
import { deleteTask } from "../../Redux/actions";
import { useDispatch } from "react-redux";

export const Contact = ({ name, number, contactId }) => {
  const dispatch = useDispatch()

  const deleteTask = () => {
   
    dispatch({ type: "tasks/deleteTask", payload: contactId });

  };

  return (
    <li key={contactId} className={styles.item}>
      <h2 className={styles.title}>
        {name}: {number}{" "}
      </h2>
      <button
        type="button"
        className={styles.btn}
        onClick={(e) => deleteTask(contactId)}
      >
        delete
      </button>
    </li>
  );
};
