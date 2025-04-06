'use client';

import { Card, Image, ListGroup } from 'react-bootstrap';
import { Contact, Note } from '@prisma/client';
import NoteItem from '@/components/NoteItem';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const ContactCardAdmin = ({ contact, notes }: { contact: Contact, notes: Note[] }) => (
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
    </Card.Body>
    <Card.Footer className="blockquote-footer">{contact.owner}</Card.Footer>
  </Card>
);

export default ContactCardAdmin;
