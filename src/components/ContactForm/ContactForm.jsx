import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact, editContact } from "../../redux/contacts/operations";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters")
    .matches(
      /^[A-Z][a-z]*(?: (?:[a-z]+ )?[A-Z][a-z]*)*$/,
      "Name must start with a capital letter, can have multiple words, and may include lowercase connectors"
    )

    .required("Full name is required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Number must follow the pattern XXX-XX-XX")
    .required("Phone number is required"),
});

const ContactForm = ({ contact = null, onReset }) => {
  const dispatch = useDispatch();

  const initialValues = contact
    ? { id: contact.id, name: contact.name, number: contact.number }
    : { name: "", number: "" };

  const nameID = nanoid();
  const numberID = nanoid();

  const handleSubmit = (values, actions) => {
    if (values.id) {
      dispatch(editContact({ ...values }));
    } else {
      dispatch(addContact({ ...values }));
    }
    actions.resetForm();
    if (onReset) onReset();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
      enableReinitialize
    >
      <Form className={s.formContainer}>
        <div>
          <label htmlFor={nameID}>
            <span>Full name:</span>
            <Field type="text" name="name" id={nameID} />
            <ErrorMessage
              name="name"
              component="span"
              className={s.errorMessage}
            />
          </label>
        </div>
        <div>
          <label htmlFor={numberID}>
            <span>Phone number:</span>
            <Field type="text" name="number" id={numberID} />
            <ErrorMessage
              name="number"
              component="span"
              className={s.errorMessage}
            />
          </label>
        </div>
        <button type="submit">
          {contact ? "Update Contact" : "Add Contact"}
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
