import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import Contact from "../Сontact/Contact";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div className={styles["contact-container"]}>
      <ul className={styles["contact-list"]}>
        {contacts.map(({ name, number }, index) => (
          <Contact
            key={index}
            name={name}
            number={number}
            onDelete={() => onDeleteContact(index)}
          />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
