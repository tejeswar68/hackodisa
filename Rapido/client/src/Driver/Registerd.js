import React, { useState } from "react";
import axios from "axios";
import Nav from "../Nav";
export default function Registerd() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const[vehicle,setVehicle]=useState("")
  const submit = () => {
    const data = {
      name: name,
      email: email,
      vehicle:vehicle,
      pass: pass,
    };
    axios.post("http://localhost:1000/dreg", data).then((res) => {
      
    });
  };
  return (
    <div>
    <Nav></Nav>
      <center className="mt-5">
        <h1 className="my-5 text-secondary">Rapido Driver</h1>
        <div className="card m-1 shadow-lg p-3 mb-5 bg-white rounded mt-3" style={{"width":"400px"}}>
        <form>
          <div className="mt-2">
            <h2 className="mt-2">Create Account</h2>
            <hr/>
            <div className="mt-5">
              <h7>Name</h7>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="mt-4">
              <h7>Email</h7>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="mt-4">
              <h7>Vehicle</h7>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
              ></input>
            </div>
            <div className="mt-4">
              <h7>Password</h7>&nbsp;&nbsp;
              <input
                value={pass}
                type="password"
                onChange={(e) => setPass(e.target.value)}
              ></input>
            </div>

            <button className="btn btn-success mt-4" onClick={submit}>
              REGISTER
            </button>
            <div className="mt-3">
              <h7 className="mt-4">
                Already have an account? <a href="/dlogin"> Signin</a>
              </h7>
            </div>
          </div>
          </form>
        </div>
      </center>
    </div>
  );
}

