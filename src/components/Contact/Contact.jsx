import { Formik } from "formik";
import Contacts from "./Contact.json";
import "./Contact.css";

const Contact = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      {() => (
        <div className="contact-container">
          <ul className="contact-list">
            {Contacts.map((item) => (
              <li key={item.id} className="contact-item">
                <span className="contact-name">{item.name}</span>:
                <span className="contact-number">{item.number}</span>
                <button className="delete-button">Delete</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Formik>
  );
};

export default Contact;
