import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {
  // selectContacts,
  // selectFilter,
  selectFilteredContacts,
} from "../../redux/selectors";
import { deleteContact } from "../../redux/contactsOps";

export default function ContactList() {
  const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectFilter);
  // console.log("contacts in ContactList:");
  // console.log(contacts);
  // console.log("filter in ContactList:");
  // console.log(filter);
  // const visibleContacts = contacts.filter(({ name }) =>
  //   name.toLowerCase().includes(filter.toLowerCase())
  // );
  const visibleContacts = useSelector(selectFilteredContacts);
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
