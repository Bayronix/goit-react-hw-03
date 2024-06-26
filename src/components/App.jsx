import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import Contact from "./Contact/Contact";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (formData) => {
    setContacts([...contacts, formData]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onLogin={handleAddContact} />
      <SearchBox />
      <ContactList />
      <Contact />
    </div>
  );
}

export default App;
