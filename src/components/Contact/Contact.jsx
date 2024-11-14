import s from "./Contact.module.css";
import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <ul className={s.contactList}>
      <li className={s.contactItem}>
        <h2 className={s.contactName}>
          <FaUserAlt /> {name}
        </h2>
        <p className={s.contactNumber}>
          <FaPhoneAlt /> {number}
        </p>
        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    </ul>
  );
};
export default Contact;
