import "./App.css";
// import { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import Loader from "./components/Loader/Loader";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm />
          {loading && <Loader />}
          {error && <Heading title="Its wrong" />}
          <SearchBox />
          <ContactList />
        </Container>
      </Section>
    </>
  );
}

export default App;
