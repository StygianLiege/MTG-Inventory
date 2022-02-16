import React, { Component } from 'react';

class Form extends Component {
  initialState = {
    name: '',
  };
  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name } = this.state;
    return (
      <form>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
        />
        <input type="button" value="Add Card" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
