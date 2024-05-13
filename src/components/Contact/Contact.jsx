import { RiContactsFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import css from "../Contact/Contact.module.css";

export default function Contact({ contacts: { id, name, number }, onDelete }) {
  return (
    <>
      <div className={css.box}>
        <RiContactsFill />
        <span className={css.item}>{name}</span>
      </div>
      <div className={css.box}>
        <FaPhone />
        <span className={css.item}>{number}</span>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
}
