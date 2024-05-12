import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";

export default function ContactForm({ onAdd }) {
  const handleSubmit = ({ name, number }, actions) => {
    onAdd({ id: nanoid(), name, number });
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label>Name</label>
          <Field type="text" name="name" />
        </div>
        <div>
          <label>Number</label>
          <Field type="number " name="number" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
