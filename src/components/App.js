import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

const getLocalContacts = () => {
  const savedContacts = localStorage.getItem('contact-item');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return [];
};

export const App = () => {
  const [contacts, setContacts] = useState(getLocalContacts);
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    localStorage.setItem('contact-item', JSON.stringify(contacts));
  }, [contacts]);




  const addContact = newContact => {
    const normalizedName = newContact.name.toLowerCase();
    let contactName = contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (contactName) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    setContacts(prevState => [...prevState, { ...newContact, id: nanoid() }]);
  };

  const deleteContact = evt => {
    setContacts(prevState =>
      prevState.filter(element => element.name !== evt.target.id)
    );
  };

  const onFilter = evt => {
    let name = evt.target.value;
    setFilter(name);
  };

  const getFiltereContacts = contacts.filter(contact => {
    const normalizeFilter = filter.toLowerCase();
    return contact.name.toLowerCase().includes(normalizeFilter)
  });



  return (
    <div className='numberCard'>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />

      <h2>Contacts</h2>
      <Filter inputValue={filter} handleChange={onFilter} />
      <ContactList contacts={getFiltereContacts} onDelete={deleteContact} />
    </div>
  )
};