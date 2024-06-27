import PropTypes from "prop-types";
import styles from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <li className={styles["contact-item"]}>
      <span className={styles["contact-name"]}>{name}</span>:
      <span className={styles["contact-number"]}>{number}</span>
      <button onClick={onDelete} className={styles["delete-button"]}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
