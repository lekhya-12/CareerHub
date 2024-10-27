import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './NavBarComponent';

const AdminDashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [hrs, setHrs] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:3128/job/details');
        const allEmployees = response.data;
        
        const employees = allEmployees.filter(emp => emp.role === 'employee');
        const hrs = allEmployees.filter(emp => emp.role === 'hr');
        
        setEmployees(employees);
        setHrs(hrs);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <>
      <NavbarComponent userRole={'admin'} />
      <div className="container mt-5">
        <div className="row py-2">
          <div className=" text-center col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Admin Dashboard</h1>
            <br></br>
          </div>
        </div>
        
        <div className="row mb-5">
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="card-title mb-3">HR Details</h2>
                <table className="table table-hover table-striped table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th>Employee ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile Number</th>
                      <th>Age</th>
                      <th>Gender</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hrs.map(hr => (
                      <tr key={hr._id}>
                        <td>{hr.empId}</td>
                        <td>{hr.name}</td>
                        <td>{hr.email}</td>
                        <td>{hr.mobileNumber}</td>
                        <td>{hr.age}</td>
                        <td>{hr.gender}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="card-title mb-3">Employee Details</h2>
                <table className="table table-hover table-striped table-bordered">
                  <thead className="thead-dark">
                    <tr>
                    <th>Employee ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile Number</th>
                      <th>Age</th>
                      <th>Gender</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map(employee => (
                      <tr key={employee._id}>
                        <td>{employee.empId}</td>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.mobileNumber}</td>
                        <td>{employee.age}</td>
                        <td>{employee.gender}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
