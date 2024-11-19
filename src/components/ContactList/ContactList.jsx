import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ data, onDelete }) => {
  return (
    <ul className={s.list}>
      {data?.map((contact) => (
        <li key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            phone={contact.number}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
