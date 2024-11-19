import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

const initialValues = {
  contactName: "",
  phoneNumber: "",
};

const FeedbackSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phoneNumber: Yup.string().required("Required").min(7, "Too short"),
});

const ContactForm = ({ onAdd }) => {
  const idName = useId();
  const idPhone = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    onAdd({
      name: values.contactName,
      number: values.phoneNumber,
    });
    actions.resetForm();
  };

  // const nameFieldId = useId();
  // const phoneNumberFieldId = useId();

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <div>
          <div className={s.wrapper}>
            <label htmlFor={idName}>Name</label>
            <Field
              className={s.field}
              name="contactName"
              type="text"
              id={idName}
            />
            <ErrorMessage
              name="contactName"
              component="span"
              className={s.error}
            />
          </div>

          <div className={s.wrapper}>
            <label htmlFor={idPhone}>Number</label>
            <Field
              className={s.field}
              name="phoneNumber"
              type="text"
              id={idPhone}
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
