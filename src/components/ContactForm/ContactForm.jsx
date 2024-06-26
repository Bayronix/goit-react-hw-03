import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./ContactForm.css";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  number: Yup.string()
    .matches(/^[0-9]+$/, "Must be a valid number")
    .min(10, "Too short")
    .max(15, "Too long")
    .required("Required"),
});

const ContactForm = ({ onLogin }) => {
  const handleSubmit = (values, { resetForm }) => {
    onLogin(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: "",
        number: "",
      }}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="form-class">
          <h3>Username</h3>
          <Field className="field-class" type="text" name="username" />
          <ErrorMessage
            name="username"
            component="div"
            className="error-message"
          />

          <h3>Phone Number</h3>
          <Field className="field-class" type="text" name="number" />
          <ErrorMessage
            name="number"
            component="div"
            className="error-message"
          />

          <button className="button-class-add" type="submit">
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default ContactForm;
