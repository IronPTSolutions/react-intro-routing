import React from "react";
import { Link } from "react-router-dom";
import contacts from "../data/contacts.json";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Contacts</h2>

        <Link className="btn btn-default" to="/contacts/new">
          Add contact
        </Link>

        <hr />

        {contacts.map((contact) => (
          <div key={contact.id}>
            <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
