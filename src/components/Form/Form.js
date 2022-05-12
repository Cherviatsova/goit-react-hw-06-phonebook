import React, { useState } from 'react';
import {
  Label,
  Input,
  Button,
  ContactForm,
  Container,
} from './Form.styled.jsx';

import { useDispatch } from 'react-redux';
import { addContact } from 'redux/actions.js';

export default function Form() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Container onSubmit={handleSubmit}>
      <ContactForm>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label>Number</Label>
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </ContactForm>
    </Container>
  );
}
