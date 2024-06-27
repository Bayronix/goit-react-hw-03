import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";
import styles from "./SearchBox.module.css";

const SearchBox = ({ onSearchContact }) => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className={styles["form-class"]}>
        <h3>Find contacts by name</h3>
        <Field
          className={styles["field-class-name"]}
          type="text"
          name="username"
          onChange={onSearchContact}
        />
      </Form>
    </Formik>
  );
};

SearchBox.propTypes = {
  onSearchContact: PropTypes.func.isRequired,
};

export default SearchBox;
