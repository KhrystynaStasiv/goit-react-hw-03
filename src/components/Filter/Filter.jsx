import { Formik, Form, Field } from "formik";
import s from "./Filter.module.css";

const Filter = (value, onFilter) => {
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
          <Field
            className={s.field}
            type="text"
            name="searchField"
            value={value}
            onChange={(e) => {
              onFilter(e.target.value);
            }}
          />
        </Form>
      </Formik>
    </div>
  );
};

export default Filter;
