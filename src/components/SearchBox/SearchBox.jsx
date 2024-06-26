import { Formik, Form, Field } from "formik";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className={styles["form-class"]}>
        <h3>Find contacts by name</h3>
        <Field
          className={styles["field-class-name"]}
          type="text"
          name="username"
        />
      </Form>
    </Formik>
  );
};

export default SearchBox;
