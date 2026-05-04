import React from 'react';
import { createRoot } from 'react-dom/client';

class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        this.setState({ employees: data.users.slice(0, 5) });
      });
  }

  render() {
    const rows = this.state.employees.map(emp => (
      <tr key={emp.id}>
        <td>{emp.firstName}</td>
        <td>{emp.lastName}</td>
        <td>{emp.age}</td>
      </tr>
    ));

    return (
      <div>
        <h1>Employee List</h1>
        <table border="1">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

const root = createRoot(document.getElementById('content'));
root.render(<EmployeeList />);
