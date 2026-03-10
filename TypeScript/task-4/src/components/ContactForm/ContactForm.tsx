import { Field, Form, Formik, type FormikHelpers } from "formik";
import { nanoid } from "nanoid";
import type { ContactType } from "../../types";

interface ContactFormProps {
  onAdd: (newContact: ContactType) => void;
}

interface State {
  name: string;
  number: string;
}

const initialState: State = {
  name: "",
  number: "",
};

export default function ContactForm({ onAdd }: ContactFormProps) {
  const handleSubmit = (value: State, action: FormikHelpers<State>) => {
    if (value.name.length < 3 || value.number.length < 3) {
      return;
    }

    const newContact = { id: nanoid(), ...value };
    onAdd(newContact);
    action.resetForm();
  };

  return (
    <Formik initialValues={initialState} onSubmit={handleSubmit}>
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
        </label>
        <label>
          Number
          <Field type="text" name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
