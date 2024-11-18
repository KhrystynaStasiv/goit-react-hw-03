import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

const ContactForm = (onAdd) => {
  const fromValidation = Yup.object().shape({
    username: Yup.string().required("Required"),
    phoneNumber: Yup.string().required("Required").min(7, "Too short"),
  });
  const initialValues = {
    username: "",
    phoneNumber: "",
  };
  const handleSubmit = (values, actions) => {
    console.log(values);
    onAdd({
      name: values.username,
      number: values.phoneNumber,
    });
    actions.resetForm();
  };

  const nameFieldId = useId();
  const phoneNumberFieldId = useId();

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={fromValidation}
    >
      <Form className={s.form}>
        <div>
          <div className={s.wrapper}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field
              className={s.field}
              name="username"
              type="text"
              id={nameFieldId}
            />
          </div>

          <div className={s.wrapper}>
            <label htmlFor={phoneNumberFieldId}>Number</label>
            <Field
              className={s.field}
              name="phoneNumber"
              type="text"
              id={phoneNumberFieldId}
            />
            <ErrorMessage
              className={s.error}
              name="phoneNumber"
              component="span"
            />
          </div>
        </div>

        <div className={s.btnWrapper}>
          <button className={s.button} type="submit">
            Add Contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
