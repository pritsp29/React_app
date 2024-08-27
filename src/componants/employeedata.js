import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../apiservice';

const EmployeeData = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
    // Example of fetching data
    fetchData('employee/')
      .then(response => {
        setUsers(response);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }, []);

    // useEffect(() => {
    // fetchData();
    // }, []);

    // const fetchData = async () => {
    // try {
    //     const response = await axios.get('http://localhost:8000/employee/');
    //     setUsers(response.data); // Assuming the API returns an array of users
    // } catch (error) {
    //     console.error('Error fetching data:', error);
    // }
    // };

  return (
    <div>
      <h2>Employee Data</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Date of Birth</th>
            <th>Hire date</th>
            <th>Salary</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.phone_number}</td>
              <td>{user.date_of_birth}</td>
              <td>{user.hire_date}</td>
              <td>{user.salary}</td>
              <td>{user.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        <Link to="/form">Go to Form</Link>
      </p>
    </div>
  )
}

export default EmployeeData