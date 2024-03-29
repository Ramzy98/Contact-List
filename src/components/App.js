import React from "react";
import ListContact from "./ListContact";
import * as ContactsAPI from ".././utils/ContactsAPI";
import CreateContact from "./CreateContact";
import { Route } from "react-router-dom";
class App extends React.Component {
  state = {
    contacts: [],
  };
  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState(() => ({
        contacts,
      }));
    });
  }
  createContact = (contact) => {
    ContactsAPI.create(contact).then((contact) => {
      this.setState((currentState) => ({
        contacts: currentState.contacts.concat([contact]),
      }));
    });
  };
  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id;
      }),
    }));
    ContactsAPI.remove(contact);
  };
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <ListContact
              contacts={this.state.contacts}
              onDeleteContact={this.removeContact}
            />
          )}
        />
        <Route
          path="/create"
          render={({ history }) => (
            <CreateContact
              onCreateContact={(contact) => {
                this.createContact(contact);
                history.push("/");
              }}
            />
          )}
        />
      </div>
    );
  }
}
export default App;
