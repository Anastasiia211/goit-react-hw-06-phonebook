import { List, ListItem } from './ContactList.styled';
import { deleteContact } from 'redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';


export const ContactList = () => {
    const dispatch = useDispatch();
    const valueFilter = useSelector(state => state.filter.filter);
    const valueContacts = useSelector(state => state.contacts.contacts);

    const visibleContacts = valueContacts.filter(contact => {
        const normalizedFilter = valueFilter.toLowerCase();
        return contact.name.toLowerCase().includes(normalizedFilter);
    });

    const onDelete = evt => {
        const contactsFiltered = valueContacts.filter(
            contact => contact.name !== evt.target.id
        );
        dispatch
            (deleteContact(contactsFiltered));
    };
    return (
        <List>
            {visibleContacts.map(contact => (
                <ListItem key={contact.id}>
                    <p>
                        <span>{contact.name}: </span>
                        <span>{contact.number}</span>
                    </p>
                    <button
                        type="button"
                        id={contact.name}
                        className='btn btn-submit'
                        onClick={onDelete}>
                        Delete
                    </button>
                </ListItem>
            ))}
        </List>
    );
};