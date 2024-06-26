import { Formik, Form, Field } from "formik";

const SearchBox = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className="form-class">
        <h3>Find contacts by name</h3>
        <Field className="field-class-name" type="text" name="username" />
      </Form>
    </Formik>
  );
};

export default SearchBox;
