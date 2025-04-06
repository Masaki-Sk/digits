'use client';

import { Card, Image, ListGroup } from 'react-bootstrap';
import { Contact, Note } from '@prisma/client';
import Link from 'next/link';
import NoteItem from './NoteItem';
import AddNoteForm from './AddNoteForm';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const ContactItem = ({ contact, notes }: { contact: Contact, notes: Note[] }) => (
  <Card>
    <Card.Header>
      <Image src={contact.image} alt={contact.firstName} height={100} width={100} />
      <Card.Title>
        {contact.firstName}
        &nbsp;
        {contact.lastName}
      </Card.Title>
      <Card.Subtitle>{contact.address}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{contact.description}</Card.Text>
      <ListGroup variant="flush">
        {notes.map((note) => <NoteItem key={note.id} note={note} />)}
      </ListGroup>
      <AddNoteForm contact={contact} />
    </Card.Body>
    <Card.Footer>
      <Link href={`edit/${contact.id}`}>Edit</Link>
    </Card.Footer>
  </Card>
);

export default ContactItem;
