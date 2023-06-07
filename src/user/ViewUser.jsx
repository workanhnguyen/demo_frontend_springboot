import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BASE_URL_BACKEND } from "../components/constants";

const initUserState = { name: "", username: "", email: "" };

const ViewUser = () => {
  const [user, setUser] = useState(initUserState);

  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async() => {
      const { data } = await axios.get(`${BASE_URL_BACKEND}/user/${id}`);

      setUser({...data});
    }

    fetchUser();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <div className="card">
            <div className="card-header">Details or User ID: </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Name: </b>{user.name}
              </li>
              <li className="list-group-item">
                <b>Username: </b>{user.username}
              </li>
              <li className="list-group-item">
                <b>Email: </b>{user.email}
              </li>
            </ul>
          </div>
          <div className="w-full">
            <Link className="w-full btn btn-primary my-2" to="/">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
