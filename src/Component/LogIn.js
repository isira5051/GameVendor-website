import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import ShopMain from "./ShopMain";

function LogIn() {
  const history = useHistory();

  const [usernameT, setUsernameT] = useState("");
  const [passwordT, setPasswordT] = useState("");

  const register = () => {
    const data = {
      Username: usernameT,
      Password: passwordT,
    };

    axios
      .post("http://localhost:3001/LogInData", data)
      .then((response) => {
        console.log("success");
        console.log("Data:", response.data);
        if(response.data.message === "Null")
        {
            alert("Enter Details Please")
        }
        else if (response.data.message === "User Does Not Exist") {
          alert("Sorry Username Not Registered");
        } else if (response.data.message === "Password Failed") {
          alert("Password Incorrect");
        } else if (response.data.message === "Success") {
          
          history.push("/ShopMain" , {Username : usernameT});
          
        }else if(response.data.message === 'Username Error')
        {
            alert('Sorry Username Not Registered')
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <React.Fragment>
            <img
        src="/images/pdctb8wcsok5vtnkk4qabf8ac6dokdy6yepm4kqin9jafzjw3c4rafwbu4qieqre--removebg.png"
        width={600}
        height={400}
        style={{ marginLeft: "940px", marginTop: "300px" }}
        alt="placeholder"
      ></img>
      <div className="container" style={{ marginTop: "100px" }}>
        <input
          className="form-control"
          placeholder="username"
          size={80}
          value={usernameT}
          onChange={(e) => setUsernameT(e.target.value)}
        ></input>
        <br />
        <br />
        <br />
        <input
          className="form-control"
          type="password"
          placeholder="password"
          size={80}
          value={passwordT}
          onChange={(e) => setPasswordT(e.target.value)}
        ></input>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-6">
            <center>
              <button
                className="custom-button-class"
                onClick={register}
                style={{
                  width: "100px",
                  height: "48px",
                  marginLeft: "570px",
                }}
              >
                <h5 style={{ color: "white" }}>Go</h5>
              </button>
            </center>
          </div>
          <div className="col-6">
            <button
              className="custom-button-class"
              style={{
                width: "200px",
                height: "48px",
                marginLeft: "97px",
                backgroundColor: "white",
              }}
            >
              <center>
                <Link to="/register">
                  <h5 style={{ color: "black" }}>Sign Up</h5>
                </Link>
              </center>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LogIn;
