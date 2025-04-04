'use client';

import { Card, Image } from 'react-bootstrap';
import { Contact } from '@prisma/client';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const StuffItem = ({ contact }: { contact: Contact }) => (
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
    </Card.Body>
    <Card.Footer className="blockquote-footer">{contact.owner}</Card.Footer>
  </Card>
);

export default StuffItem;
