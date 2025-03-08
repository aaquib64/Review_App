import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserByName = () => {
  const { name } = useParams(); // Get restaurant ID from URL
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5410/getuserByName/${name}`)
      .then((response) => {
        console.log("API Response:", response.data); // Debugging
        if (Array.isArray(response.data)) {
          setUser(response.data);
        } else {
          console.error("Unexpected API response:", response.data);
          setUser([]); // Fallback to an empty array
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [name]); // put id or city in array

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-center m-4">User {name}</h2>
      <div className="row mx-2">
        {user.map((user) => (
          <div key={user.id} className="col-md-4 mb-3 text-center">
            <div className="card p-3">
              <h5>{user.name}</h5>
              <p>{user.email}</p>
              <p>⭐ {user.rating}</p>
              <p> {user.comments} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserByName;
