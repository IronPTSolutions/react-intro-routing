import { useParams } from "react-router";
import contacts from "../data/contacts.json";

function Contact() {
  const { id } = useParams();

  const contact = contacts.find((c) => c.id === id);

  return (
    <div>
      <div>{contact.name}</div>
      <div>{contact.username}</div>
    </div>
  );
}

export default Contact;
