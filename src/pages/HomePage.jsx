import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { BASE_URL_BACKEND } from "../components/constants";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUserData();
  }, [])

  const fetchUserData = async() => {
    const { data } = await axios.get(`${BASE_URL_BACKEND}/users`);
    setUsers(data);
  }

  const handleDeleteUser = async(id) => {
    await axios.delete(`${BASE_URL_BACKEND}/user/${id}`);
    fetchUserData();
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {users?.length > 0 && users.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link to={`/view-user/${user.id}`} className="btn btn-primary mx-2">
                      View
                    </Link>
                    <Link to={`/edit-user/${user.id}`} className="btn btn-outline-primary mx-2">
                      Edit
                    </Link>
                    <button onClick={() => handleDeleteUser(user.id)} className="btn btn-danger mx-2">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HomePage;
