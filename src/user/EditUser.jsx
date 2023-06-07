import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { BASE_URL_BACKEND } from "../components/constants";

const initUserState = { name: "", username: "", email: "" };

const EditUser = () => {
  // States
  const [user, setUser] = useState(initUserState);

  // Variables
  const navigate = useNavigate();
  const { id } = useParams();

  // Functions
  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${BASE_URL_BACKEND}/user/${id}`, user);
    } catch (error) {
      console.log(error);
    }

    setUser({ ...initUserState });
    navigate("/");
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL_BACKEND}/user/${id}`);

        setUser({...data});
      } catch (error) {
        console.log(error);
      }
    }

    fetchUser();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                required
                value={user.name}
                onChange={handleInputChange}
                type="text"
                className="form-control"
                placeholder="Enter your name"
                id="name"
                name="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                User Name
              </label>
              <input
                required
                value={user.username}
                onChange={handleInputChange}
                type="text"
                className="form-control"
                placeholder="Enter your user name"
                id="username"
                name="username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                required
                value={user.email}
                onChange={handleInputChange}
                type="email"
                className="form-control"
                placeholder="Enter your email"
                id="email"
                name="email"
              />
            </div>
            <div className="w-full flex justify-center">
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <Link to="/" className="btn btn-outline-danger mx-2">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
