import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { useId } from "react";

export default function ContactForm({ onAdd }) {
  const handleSubmit = ({ name, number }, actions) => {
    onAdd({ id: nanoid(), name, number });
    actions.resetForm();
  };

  const ContactsSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.number()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  });

  const id = useId();

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={ContactsSchema}
    >
      <Form>
        <div>
          <label htmlFor={id + "-name"}>Name</label>
          <Field id={id + "-name"} type="text" name="name" />
          <ErrorMessage name="name" />
        </div>
        <div>
          <label htmlFor={id + "-number"}>Number</label>
          <Field id={id + "-number"} type="number " name="number" />
          <ErrorMessage name="number" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
