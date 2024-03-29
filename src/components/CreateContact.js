import React from "react";
import { Link } from "react-router-dom";
import ImageInput from ".././ImageInput";
import serializeForm from "form-serialize";
class CreateContact extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });
    if (this.props.how) {
      this.props.onCreateContact(values);
    }
  };
  render() {
    return (
      <div>
        <Link className="close-create-contact" to="/">
          Close
        </Link>
        <form onSubmit={this.handleSubmit}>
          <ImageInput
            className="create-contact-avatar-input"
            name="avatarURL"
            maxHeight={64}
          />
          <div className="create-contact-details">
            <input type="text" name="name" placeholder="name" />
            <input type="text" name="handle" placeholder="handle" />
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    );
  }
}
export default CreateContact;
