import React, { Component } from "react";
import {
  ContactBoxed,
  FormInput,
  Input,
  FormMessage,
  Button,
  FormOptions
} from "./styled";

export default class FormDataComponent extends Component {
  userData;
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeOptions = this.onChangeOptions.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: "",
      email: "",
      options: "",
      message: "",
    };
  }
  // Form Events
  onChangeName(e) {
    this.setState({ name: e.target.value });
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangeOptions(e) {
    this.setState({ options: e.target.value });
  }
  onChangeMessage(e) {
    this.setState({ message: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      options: "",
      message: "",
    });
    alert("Message was sent ");
  }
  // React Life Cycle
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("user"));
    if (localStorage.getItem("user")) {
      this.setState({
        name: this.userData.name,
        email: this.userData.email,
        options: this.userData.options,
        message: this.userData.message,
      });
    } else {
      this.setState({
        name: "",
        email: "",
        options: "",
        message: "",
      });
    }
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("user", JSON.stringify(nextState));
  }

  render() {
    return (
      <ContactBoxed>
        <h2>Get In Touch</h2>
        <div>
          Please fill out the form below to send us an email and we will get
          back to you as soon as possible.
        </div>
        <form onSubmit={this.onSubmit}>
          <FormInput className="form-group">
            <Input
              type="text"
              placeholder="Subject"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
            <Input
              type="email"
              placeholder="Email"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </FormInput>
          <FormOptions className="form-group">
          <select value={this.state.options} onChange={this.onChangeOptions}>
            <option value="" disabled selected>
              Select your option
            </option>
            <option value="Sending your recipes">Sending your recipes</option>
            <option value="Criticism and suggestions">Criticism and suggestions</option>
          </select>
          </FormOptions>
          <FormMessage className="form-group">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Message"
              required
              value={this.state.message}
              onChange={this.onChangeMessage}
            ></textarea>
          </FormMessage>
          <Button type="submit" className="btn btn-primary btn-block">
            SEND MESSAGE<i className="fab fa-telegram-plane"></i>
          </Button>
        </form>
      </ContactBoxed>
    );
  }
}
