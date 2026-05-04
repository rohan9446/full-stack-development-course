import EmployeeFilter from './EmployeeFilter.jsx';
import EmployeeAdd from './EmployeeAdd.jsx';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EmployeeRow(props) {
  return (
    <tr>
      <td>{props.employee.name}</td>
      <td>{props.employee.role}</td>
    </tr>
  );
}

function EmployeeTable(props) {
  const rows = props.employees.map((emp, index) => (
    <EmployeeRow key={index} employee={emp} /> 
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
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
  }

  render() {
    return (
      <React.Fragment>
        <h1>Employee List</h1>
        <EmployeeFilter />
        <EmployeeTable employees={this.state.employees} />
        <EmployeeAdd />
      </React.Fragment>
    );
  }
}
