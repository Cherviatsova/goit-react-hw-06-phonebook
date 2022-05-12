import React from 'react';
import { ContactList, Button } from './ContactsList.styled.jsx';
import PropTypes from 'prop-types';
import ElementListContacts from '../ElementListContacts/ElementListContacts.js';

import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/selector.js';
import { deleteContact } from 'redux/actions.js';

export default function ContactsList() {
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));
  const contacts = useSelector(getVisibleContacts);

  return (
    <ContactList>
      {contacts.map(({ id, name, number }) => (
        <ElementListContacts key={id} name={name} number={number}>
          <Button onClick={() => onDeleteContact(id)}>Delete</Button>
        </ElementListContacts>
      ))}
    </ContactList>
  );
}
ContactList.defaultProps = {
  contacts: [],
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
