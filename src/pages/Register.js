import React, { useState, useEffect } from "react";
import "../style/Form.css";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/User.js";

function Register() {
  const navigate = useNavigate();
  const [uname, setUsername] = useState("");
  const [eml, setEmail] = useState("");
  const [psw, setPassword] = useState("");
  const [err, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("ERROR: Something Went Wrong");
  useEffect(() => {
    document.title = "Register";
  }, []);
  return (
    <div className="FormOuterContainer">
      <div className="FormContainer">
        <form className="form" action="">
          <h1 className="formHeading">Welcome to Brewery</h1>
          <label className="formlabel" htmlFor="">
            Username
          </label>
          <input
            className="forminput"
            type="text"
            value={uname}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Username"
          />
          <label className="formlabel" htmlFor="">
            Email
          </label>
          <input
            className="forminput"
            type="email"
            value={eml}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="abc@gmail.com"
          />
          <label className="formlabel" htmlFor="">
            Password
          </label>
          <input
            className="forminput"
            type="password"
            value={psw}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="***********"
          />
          <button
            className="formbtn"
            onClick={async (e) => {
              e.preventDefault();
              if (uname === "" || eml === "" || psw === "") {
                setError(true);
                setErrMsg("Please fill all the fields!!");
              } else {
                const res = await registerUser(
                  uname,
                  eml,
                  psw,
                  setError,
                  setErrMsg
                );
                if (res) {
                  navigate("/");
                }
              }
            }}
          >
            Register
          </button>

          {err ? (
            <p
              className="formpara"
              style={{ marginBottom: "0px", color: "#ff1f1f", fontWeight: 600 }}
            >
              {errMsg}
            </p>
          ) : (
            <></>
          )}
          <p className="formpara">
            Already with us?{" "}
            <Link to="/login">
              <span className="formspan">Login Now</span>
            </Link>{" "}
          </p>
        </form>
        <div className="side-image2"></div>
      </div>
    </div>
  );
}

export default Register;
