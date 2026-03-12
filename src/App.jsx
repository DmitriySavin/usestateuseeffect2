import { useState } from "react";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState(null);
 
  const changeName = (event) => {
    setName(event.target.value);
     console.log(name);
  };

  const formSubmit = () => {

  }

  return (
    <>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={e => changeName(e)}
        />
      </form>

      <ul></ul>
    </>
  );
};

export default App;
