import React from "react";
import { Link } from "react-router-dom";
import contacts from "../data/contacts.json";

class Home extends React.Component {
  state = {
    showForm: false,
  };

  handleClick() {
    this.setState({ showForm: !this.state.showForm });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("Esto era solo para practicar mostrar/ocultar un formulario!");
  }

  render() {
    return (
      <div>
        <h2>Contacts</h2>

        <button
          className="btn btn-default"
          onClick={() => {
            this.handleClick();
          }}
        >
          Add contact
        </button>

        {this.state.showForm && (
          <div className="w-25">
            <form
              onSubmit={(event) => {
                this.handleSubmit(event);
              }}
            >
              <label>Name:</label>
              <input type="text" className="form-control" />
            </form>
          </div>
        )}

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
