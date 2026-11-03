import React from 'react';
import './EmployeeForm.css';

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', title: '', department: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state);
    }
    this.setState({ name: '', email: '', title: '', department: '' });
  }

  render() {
    return (
      <form className="employee-form" onSubmit={this.handleSubmit}>
        <h2>Add Employee</h2>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="title">Job Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="department">Department: </label>
          <input
            type="text"
            id="department"
            name="department"
            value={this.state.department}
            onChange={this.handleInputChange}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default EmployeeForm;
