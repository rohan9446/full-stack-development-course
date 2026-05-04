import React from 'react';
import EmployeeFilter from './EmployeeFilter.jsx';
import EmployeeAdd from './EmployeeAdd.jsx';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class EmployeeRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  }

  render() {
    const employee = this.props.employee;

    return (
      <tr>
        <td>{employee.name}</td>
        <td>{employee.role}</td>
        <td>
          <Button variant="danger" onClick={this.toggleModal}>
            Delete
          </Button>

          <Modal show={this.state.modalVisible} onHide={this.toggleModal}>
            <Modal.Header closeButton>
              <Modal.Title>Delete Confirmation</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              Are you sure you want to delete this employee?
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={this.toggleModal}>
                Cancel
              </Button>

              <Button
                variant="danger"
                onClick={() => {
                  this.props.deleteEmployee(this.props.index);
                  this.toggleModal();
                }}
              >
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
        </td>
      </tr>
    );
  }
}

function EmployeeTable(props) {
  const rows = props.employees.map((emp, index) => (
    <EmployeeRow
      key={index}
      index={index}
      employee={emp}
      deleteEmployee={props.deleteEmployee}
    />
  ));

  return (
    <table className="table table-bordered table-striped">
      <thead className="table-dark">
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default class EmployeeList extends React.Component {
  constructor() {
    super();

    this.state = {
      employees: [
        { name: "John", role: "Developer" },
        { name: "Jane", role: "Designer" },
        { name: "Mike", role: "Manager" }
      ]
    };

    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  deleteEmployee(index) {
    const employees = this.state.employees.filter((_, i) => i !== index);
    this.setState({ employees });
  }

  render() {
    return (
      <div className="container mt-4">
        <h1>Employee List</h1>
        <EmployeeFilter />
        <EmployeeTable
          employees={this.state.employees}
          deleteEmployee={this.deleteEmployee}
        />
        <EmployeeAdd />
      </div>
    );
  }
}
