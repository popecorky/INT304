import React, { useState, useEffect } from 'react';
import EmployeeForm from './EmployeeForm';

function App() {
  // start from whatever is already saved in local storage, if anything
  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem('employees');
    return saved ? JSON.parse(saved) : [];
  });

  // add a new employee to the employees array
  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  // save the employees array to local storage
  const saveData = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
  };

  return (
    <div className="App">
      <EmployeeForm onSubmit={addEmployee} />

      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            {employee.name} — {employee.title}, {employee.department} ({employee.email})
          </li>
        ))}
      </ul>

      <button onClick={saveData}>Save Data</button>
    </div>
  );
}

export default App;
