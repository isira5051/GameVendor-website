import React, { useEffect, useState } from "react";
import axios from "axios";

function UserDisplayData() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:3001/DisplayUserData", {
          email: ""
        });

        const userDataFromBackend = response.data.userData;
        setUserData(userDataFromBackend);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {userData.length > 0 ? (
        <table className="user-data-table" style={{marginLeft:'100px'}}>
          <thead>
            <tr>
              <th>User ID</th>
              <th style={{marginLeft:'100px'}}>Email</th>
              <th>Password</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead><br/>
          <tbody>
            {userData.map((row) => (
              <tr key={row.id}>
                <td >{row.Username}</td>
                <td style={{marginLeft:'100px'}}>{row.Email}</td>
                <td>{row.Password}</td>
                <td>{row.FirstName}</td>
                <td>{row.LastName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No user data found.</p>
      )}

      <br/><br/>
      <a href="/Librarian"><button className="custom-button-class">Go</button></a>
    </div>
  );
}

export default UserDisplayData;
