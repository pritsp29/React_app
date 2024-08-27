import React, { useState }  from 'react'
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { postData } from '../apiservice';

const EmployeeForm = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name:'',
        email: '',
        phone_number:'',
        date_of_birth:'',
        hire_date:'',
        salary:'',
        department:'',
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const response = postData('employee/', formData);
        }
        catch(error){
              console.error('Error submitting data:', error);
                  // Handle error
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
            }
        
        
        // try {
        //   const response = await axios.post('http://localhost:8000/employee', formData);
        //   console.log('Data submitted:', response.data);
        //   // Optionally, update UI or reset form
        // } catch (error) {
        //   console.error('Error submitting data:', error);
        // }
      };
    return (
    <div>
    <h2>Add New User</h2>
    <form onSubmit={handleSubmit}>
      <label>
        First name:
        <input type="text" name="first_name" value={formData.first_name} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Last name:
        <input type="text" name="last_name" value={formData.last_name} onChange={handleInputChange}  />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Phone number:
        <input type="number" name="phone_number" value={formData.phone_number} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Date of Birth:
        <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleInputChange}  />
      </label>
      <br />
      <label>
        Date of Hire:
        <input type="date" name="hire_date" value={formData.hire_date} onChange={handleInputChange}  />
      </label>
      <br />
      <label>
        Salary:
        <input type="number" name="salary" value={formData.salary} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Department:
        <input type="number" name="department" value={formData.department} onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    <p>
        <Link to="/table">View Table</Link>
    </p>
  </div>
  )
}

export default EmployeeForm
