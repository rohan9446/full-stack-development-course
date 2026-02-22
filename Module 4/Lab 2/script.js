// CREATE AN ARRAY OF EMPLOYEES

let employees = [
  [67890123, "Deepika Padukone", 6789, "deepika@company.com", "Marketing"],
  [78901234, "Hrithik Roshan", 7890, "hrithik@company.com", "Engineering"],
  [89012345, "Rashmika Mandanna", 8901, "rashmika@company.com", "Sales"],
  [90123456, "Mahesh Babu", 9012, "mahesh@company.com", "Executive"],
  [11223344, "Kriti Sanon", 1122, "kriti@company.com", "Administrative"]
];
// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem("employees")) {
  employees = JSON.parse(localStorage.getItem("employees"));
}

// GET DOM ELEMENTS

const form = document.querySelector("#addForm");
const empTable = document.querySelector("#empTable");
const empCount = document.querySelector("#empCount");

const idInput = document.querySelector("#id");
const nameInput = document.querySelector("#name");
const extInput = document.querySelector("#extension");
const emailInput = document.querySelector("#email");
const deptSelect = document.querySelector("#department");
// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS

buildGrid();
// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const id = Number(idInput.value);
    const name = nameInput.value.trim();
    const ext = Number(extInput.value);
    const email = emailInput.value.trim();
    const dept = deptSelect.value;
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    const newEmployee = [id, name, ext, email, dept];
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    idInput.focus();
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (!e.target.classList.contains("btn-delete")) return;
    // CONFIRM THE DELETE
    const ok = confirm("Are you sure you want to delete this employee?");
    if (!ok) return;
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
    const row = e.target.parentNode.parentNode;
    // get the employee id from the first cell in that row
    const idToDelete = Number(row.cells[0].textContent);

    // REMOVE EMPLOYEE FROM ARRAY
    // find the index in the employees array where employee[0] (id) matches
    const index = employees.findIndex((emp) => Number(emp[0]) === idToDelete);
    if (index !== -1) {
        employees.splice(index, 1);
    }

    // BUILD THE GRID
    buildGrid();

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
  // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
  const oldTbody = empTable.querySelector("tbody");
  oldTbody.remove();

  // REBUILD THE TBODY FROM SCRATCH
  const newTbody = document.createElement("tbody");

  // LOOP THROUGH THE ARRAY OF EMPLOYEES
  // REBUILDING THE ROW STRUCTURE
  for (const emp of employees) {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${emp[0]}</td>
      <td>${emp[1]}</td>
      <td>${emp[2]}</td>
      <td>${emp[3]}</td>
      <td>${emp[4]}</td>
      <td><button type="button" class="btn btn-danger btn-sm btn-delete">Delete</button></td>
    `;

    // Use appendChild() to append the constructed row to the <tbody>
    newTbody.appendChild(tr);
  }

  // BIND THE TBODY TO THE EMPLOYEE TABLE
  empTable.appendChild(newTbody);

  // UPDATE EMPLOYEE COUNT
  empCount.value = `(${employees.length})`;

  // STORE THE ARRAY IN STORAGE
  localStorage.setItem("employees", JSON.stringify(employees));
}
