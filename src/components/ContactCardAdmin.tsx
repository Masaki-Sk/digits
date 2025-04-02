'use client';

import { Card, Image } from 'react-bootstrap';
import { Contact } from '@prisma/client';

/* Renders a single contact. See list/page.tsx. */
const ContactCard = ({ contact }: { contact: Contact }) => (
  <Card>
    <Card.Header>
      <Image src={contact.image} width={75} />
      <Card.Title>
        {contact.firstName}
        &nbsp;
        {contact.lastName}
        <Card.Subtitle>{contact.address}</Card.Subtitle>
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <Card.Text>{contact.description}</Card.Text>
    </Card.Body>
    <Card.Footer className="blockquote-footer">
      {contact.owner}
    </Card.Footer>
  </Card>
);

export default ContactCard;
