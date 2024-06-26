import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";
import { useId } from "react";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  number: Yup.string()
    .matches(/^[0-9]+$/, "Must be a valid number")
    .min(10, "Too short")
    .max(15, "Too long")
    .required("Required"),
});

const ContactForm = ({ onAddContact }) => {
  const id = useId();

  const handleSubmit = (values, { resetForm }) => {
    const contactWithId = { ...values, id };
    onAddContact(contactWithId);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={styles["form-class"]}>
          <h3>Name</h3>
          <Field className={styles["field-class"]} type="text" name="name" />
          <ErrorMessage
            name="name"
            component="div"
            className={styles["error-message"]}
          />

          <h3>Phone Number</h3>
          <Field className={styles["field-class"]} type="text" name="number" />
          <ErrorMessage
            name="number"
            component="div"
            className={styles["error-message"]}
          />

          <button className={styles["button-class-add"]} type="submit">
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
