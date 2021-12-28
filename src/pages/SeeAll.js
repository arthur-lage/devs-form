import React, { useState, useEffect } from "react";
import api from "../services/api";
import "../styles/SeeAll.css";

import ReactLoading from "react-loading";

function SeeAll() {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      const users = await api.getAll();
      setRegisteredUsers(users.data);

      setLoading(false);
      setLoaded(true)
    }

    fetchData();
  }, []);

  return (
    <div>
      {loading && (
        <ReactLoading type="spin" color="#333" height={100} width={100} />
      )}

      {loaded && registeredUsers.length > 0 && (
        registeredUsers.map((user, key) => (
          <div key={key}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Birthdate: {user.birthdate}</p>
            <p>Blood Type: {user.bloodType}</p>
            <p>Distance: {user.distanceToRun}</p>
          </div>
        ))
      )}

      {loaded && registeredUsers.length === 0 && (
        <h1>No data found</h1>
      )}
    </div>
  );
}

export default SeeAll;
