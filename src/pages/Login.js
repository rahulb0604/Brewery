import React, { useState, useEffect } from "react";
import "../style/Form.css";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/User.js";

function Login() {
  const navigate = useNavigate();
  const [eml, setEmail] = useState("");
  const [psw, setPassword] = useState("");
  const [err, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("ERROR: Something Went Wrong");
  useEffect(() => {
    document.title = "Login";
  }, []);
  return (
    <div className="FormOuterContainer">
      <div className="FormContainer">
        <form className="form" action="">
          <h1 className="formHeading">Welcome Back</h1>
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
              if (eml === "" || psw === "") {
                setError(true);
                setErrMsg("Please fill all the fields!!");
              } else {
                const res = await loginUser(eml, psw, setError, setErrMsg);
                if (res) {
                  navigate("/");
                }
              }
            }}
          >
            Login
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
            New to our Platform?{" "}
            <Link to="/register">
              <span className="formspan">Register Now</span>
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
