import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { deleteContact } from "../../redux/contactSlice";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();
  console.log("contacts in ContactList:");
  console.log(contacts);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onDelete = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <ul className={css.contactList}>
        {visibleContacts.map((contact) => (
          <Contact key={contact.id} item={contact} onDelete={onDelete} />
        ))}
      </ul>
    </>
  );
}
