const employees = [{
  name: "John",
  role: "Developer"
}, {
  name: "dinisha",
  role: "Developer"
},
{
  name: "Jane",
  role: "Designer"
}, {
  name: "Mike",
  role: "Manager"
}];
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Employee List"), /*#__PURE__*/React.createElement("ul", null, employees.map((emp, index) => /*#__PURE__*/React.createElement("li", {
    key: index
  }, emp.name, " - ", emp.role))));
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/React.createElement(App, null));
