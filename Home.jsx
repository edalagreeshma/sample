import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
      axios.get('http://localhost:4000/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [])
  console.log("data", data)
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>List of Users</h1>
      <div className='w-100 rounded bg-white border shadow p-4'>
        <div  className='d-flex justify-content-end'>
        <Link  to="/create" className='btn-btn-success'>Add </Link>
          </div>
        <div className='users'>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((item) => {
                  
                  return (<tr >
                    
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <button className='btn btn-sm btn-info me-2'>Read</button>
                      <button className='btn btn-sm btn-primary me-2'>Edit</button>
                      <button className='btn btn-sm btn-danger'>Delete</button>
                    </td>
                  </tr>)
                })

              }

            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default Home