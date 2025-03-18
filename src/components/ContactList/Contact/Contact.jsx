import React from "react";
import { FaUser, FaPhone } from "react-icons/fa6";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contacts/operations";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Contact = ({ id, name, number, onEdit }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.contactListItem}>
      <div className={s.contactDetails}>
        <p>
          <FaUser />
          <span>{name}</span>
        </p>
        <p>
          <FaPhone />
          <span>{number}</span>
        </p>
      </div>
      <div className={s.buttonsContainer}>
        <button type="button" className={s.edit} onClick={() => onEdit({ id, name, number })}>
          <MdEdit />
        </button>
        <button type="button" className={s.delete} onClick={() => dispatch(deleteContact(id))}>
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default Contact;
