import PropTypes from "prop-types";
import styles from "./Contact.module.css"; // Import CSS module

const Contact = ({ contacts, onDeleteContact }) => {
  return (
    <div className={styles["contact-container"]}>
      <ul className={styles["contact-list"]}>
        {contacts.map(({ name, number }, index) => (
          <li key={index} className={styles["contact-item"]}>
            <span className={styles["contact-name"]}>{name}</span>:
            <span className={styles["contact-number"]}>{number}</span>
            <button
              onClick={() => onDeleteContact(index)}
              className={styles["delete-button"]}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
