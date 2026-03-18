import styles from './contact.module.css'

export const Contact = ({ name, number, contactId, deleteContact }) => {
  return (
    <li key={contactId} className={styles.item}>
      <h2 className={styles.title}>
        {name}: {number}{" "}
      </h2>
      <button type="button" className={styles.btn} onClick={() => deleteContact(contactId)}> 
        delete 
      </button>
    </li>
  );
};
