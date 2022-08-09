import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Employeelist = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = async () => {
    const res = await axios.get("http://localhost:5000/employee");
    setEmployees(res.data);
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:5000/employee/${id}`);
    getEmployees();
  };

  return (
    <div>
      <h1 className="title">Employee</h1>
      <h2 className="subtitle">List of employee</h2>
      <Link to={"/employee/add"} className="button is-primary mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>NIK</th>
            <th>Created By</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => {
            return (
              <tr key={employee.uuid}>
                <td>{index + 1}</td>
                <td>{employee.name}</td>
                <td>{employee.nik}</td>
                <td>{employee.user.name}</td>
                <td>
                  <Link
                    to={`/employee/edit/${employee.uuid}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteEmployee(employee.uuid)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Employeelist;
