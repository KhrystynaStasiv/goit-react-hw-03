import s from "./Contact.module.css";
import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={s.contactList}>
      <div className={s.contactItem}>
        <div className={s.info}>
          <div className={s.contactName}>
            <FaUserAlt />
            <p>{name}</p>
          </div>
          <div className={s.contactNumber}>
            <FaPhoneAlt />
            <p>{number}</p>
          </div>
        </div>
        <div className={s.containerBtn}>
          <button
            className={s.button}
            type="button"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
