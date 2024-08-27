// import logo from './logo.svg';
import './App.css';
// import { fetchData} from './apiservice';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './componants/home'; 
import EmployeeForm from './componants/employeeform';
import EmployeeData from './componants/employeedata';

function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   // Example of fetching data
  //   fetchData('employee/')
  //     .then(response => {
  //       setData(response);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  // const handlePostData = async () => {
  //   const newData = { key: 'value' };
  //   try {
  //     const response = await postData('example/endpoint/', newData);
  //     console.log('Response after POST:', response);
  //     // Handle successful post if needed
  //   } catch (error) {
  //     console.error('Error posting data:', error);
  //   }
  // }
  // console.log(data)
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/form" element={<EmployeeForm/>} />
          <Route path="/table" element={<EmployeeData/>} /> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;
