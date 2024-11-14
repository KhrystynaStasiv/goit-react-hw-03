import { Formik, Form, Field } from "formik";
import s from "./SearchField.module.css";
import { useId } from "react";

const SearchField = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  const initialValues = {
    searchField: "",
  };
  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.searchForm}>
          <label>Find contacts by name</label>
          <Field className={s.field} type="text" name="searchField" />
        </Form>
      </Formik>
    </div>
  );
};

export default SearchField;
