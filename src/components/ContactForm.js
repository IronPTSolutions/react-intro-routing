import React from "react";
import contacts from "../data/contacts.json";
import { Navigate } from "react-router";

class ContactForm extends React.Component {
  state = {
    data: {
      name: "",
      username: "",
      phone: "",
      avatar: "",
    },
    touch: {
      name: false,
      username: false,
      phone: false,
      avatar: false,
    },
    errors: {
      name: true,
      username: true,
      phone: true,
      avatar: true,
    },
    toHome: false,
  };

  validate(field, value) {
    switch (field) {
      case "name":
        return value.length < 5;
      case "username":
        return value.length < 5;
      case "phone":
        return value.length < 10;
      case "avatar":
        return value.length < 11;
    }
  }

  handleChange(e) {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.id]: e.target.value,
      },
      errors: {
        ...this.state.errors,
        [e.target.id]: this.validate(e.target.id, e.target.value),
      },
    });
  }

  handleBlur(e) {
    this.setState({
      touch: {
        ...this.state.touch,
        [e.target.id]: true,
      },
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    contacts.push({
      ...this.state.data,
      id: `${Math.random()}`,
    });

    this.setState({
      toHome: true,
    });
  }

  render() {
    const hasErrors = Object.values(this.state.errors).some((x) => x === true);

    if (this.state.toHome) {
      return <Navigate to="/home" />;
    }

    return (
      <div className="w-50">
        <pre>{JSON.stringify(this.state, null, " ")}</pre>

        <form
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <div className="mb-3">
            <label for="name" class="form-label">
              Name*
            </label>
            <input
              value={this.state.data.name}
              onChange={(e) => {
                this.handleChange(e);
              }}
              onBlur={(e) => {
                this.handleBlur(e);
              }}
              className={`form-control ${
                this.state.touch.name
                  ? this.state.errors.name
                    ? "is-invalid"
                    : "is-valid"
                  : ""
              }`}
              id="name"
            />
          </div>

          <div className="mb-3">
            <label for="username" class="form-label">
              Username*
            </label>
            <input
              value={this.state.data.username}
              onChange={(e) => {
                this.handleChange(e);
              }}
              onBlur={(e) => {
                this.handleBlur(e);
              }}
              className={`form-control ${
                this.state.touch.username
                  ? this.state.errors.username
                    ? "is-invalid"
                    : "is-valid"
                  : ""
              }`}
              id="username"
            />
          </div>

          <div className="mb-3">
            <label for="username" class="form-label">
              Phone*
            </label>
            <input
              value={this.state.data.phone}
              onChange={(e) => {
                this.handleChange(e);
              }}
              onBlur={(e) => {
                this.handleBlur(e);
              }}
              className={`form-control ${
                this.state.touch.phone
                  ? this.state.errors.phone
                    ? "is-invalid"
                    : "is-valid"
                  : ""
              }`}
              id="phone"
            />
          </div>

          <div className="mb-3">
            <label for="username" class="form-label">
              Avatar*
            </label>
            <input
              value={this.state.data.avatar}
              onChange={(e) => {
                this.handleChange(e);
              }}
              onBlur={(e) => {
                this.handleBlur(e);
              }}
              className={`form-control ${
                this.state.touch.avatar
                  ? this.state.errors.avatar
                    ? "is-invalid"
                    : "is-valid"
                  : ""
              }`}
              id="avatar"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={hasErrors}
          >
            Create
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
