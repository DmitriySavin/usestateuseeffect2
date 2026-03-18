import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { Contact } from "./components/Contact/Contact";
import { Filter } from "./components/Filter/Filter";
import { ToastContainer, toast, Bounce } from "react-toastify";
import styles from '../src/App.module.css'

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const data = localStorage.getItem("contacts");

    if (data) {
      return JSON.parse(data);
    } else {
      return [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ];
    }
  });
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const changeName = (name) => {
    setName(name);
    // console.log(name);
  };
  const changeNumber = (number) => {
    setNumber(number);
  };

  const addContacts = (event) => {
    event.preventDefault();

    const normalizedName = name.trim().toLowerCase();
    const normalizedNumber = number.trim();

    const nameExist = contacts.some(
      (contact) => contact.name.toLowerCase() === normalizedName,
    );
    const numberExist = contacts.some(
      (contact) => contact.number === normalizedNumber,
    );

    if (nameExist) {
      toast.error("The name is currenty in use");
      return;
    }

    if (numberExist) {
      toast.error("The number is currenty in use");
      return;
    }

    setContacts([
      ...contacts,
      { name: normalizedName, number: normalizedNumber, id: nanoid() },
    ]);

    setName("");
    setNumber("");
  };

  const changeFilter = (filterName) => {
    setFilter(filterName);
  };

  const normalizeFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter),
  );

  const deleteContact = (contactId) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== contactId));
  };

  return (
    <>
      <form onSubmit={addContacts} className={styles.form}>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Name"
          value={name}
          onChange={(e) => changeName(e.target.value)}
        />
        <h2>Number</h2>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Number"
          value={number}
          onChange={(e) => changeNumber(e.target.value)}
        />
        <button type="submit">Add contact</button>
      </form>

      <ul className={styles.list}>
        {visibleContacts.map((contact) => (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
            contactId={contact.id}
            deleteContact={deleteContact}
          />
        ))}
      </ul>

      <Filter changeFilter={changeFilter} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
};

export default App;
