import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import Contact from "./Contact/Contact";
import { useState } from "react";
import InitialContacts from "./Contact/Contact.json";

function App() {
  const [contacts, setContacts] = useState(InitialContacts);

  const handleAddContact = (formData) => {
    setContacts([...contacts, formData]);
    console.log(...contacts, formData);
  };

  const handleDeleteContact = (index) => {
    const updatedContacts = contacts.filter((contact, i) => i !== index);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm onAddContact={handleAddContact} />
      <SearchBox />
      <ContactList />
      <Contact contacts={contacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
}

export default App;
