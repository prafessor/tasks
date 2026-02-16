import { useId } from "react";
import { nanoid } from "nanoid";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contatcsOps";

const initialValues = {
  name: "",
  number: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const formId = useId();

  const handleSubmit = (value, action) => {
    dispatch(addContact({ ...value}));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div className={css.item}>
          <label htmlFor={`name-${formId}`}>Name</label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={`name-${formId}`}
          />
          <div className={css.errorWrapper}>
            <ErrorMessage name="name" />
          </div>
        </div>
        <div className={css.item}>
          <label htmlFor={`number-${formId}`}>Number</label>
          <Field
            className={css.input}
            type="text"
            name="number"
            id={`number-${formId}`}
          />
          <div className={css.errorWrapper}>
            <ErrorMessage name="number" />
          </div>
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
