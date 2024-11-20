import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAdd }) => {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string().min(7, "Too short").required("Required"),
  });

  const handleSubmit = (values, actions, onAdd) => {
    console.log(values);
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      onSubmit={(values, actions) => handleSubmit(values, actions, onAdd)}
      initialValues={initialValues}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <div>
          <div className={s.wrapper}>
            <label>Name</label>
            <Field className={s.field} name="name" type="text" />
            <ErrorMessage name="name" component="span" className={s.error} />
          </div>

          <div className={s.wrapper}>
            <label>Number</label>
            <Field className={s.field} name="number" type="text" />
            <ErrorMessage className={s.error} name="number" component="span" />
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
