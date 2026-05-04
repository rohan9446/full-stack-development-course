const employees = [
  { name: "John", role: "Developer" },
  { name: "Jane", role: "Designer" },
  { name: "Mike", role: "Manager" }
];

function App() {
  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map((emp, index) => (
          <li key={index}>
            {emp.name} - {emp.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
