import React, { useState } from "react";
import NavBar from "./NavBar";
const Form = (props) => {
  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <NavBar />
      <div className="h-screen bg-purple-200 flex justify-center items-center">
        <div>
          <h2 className="text-5xl">
            {state == "Sign Up" ? "Create Account" : "Login"}
          </h2>
          <p className="text-xl">
            {state == "Sign Up"
              ? "Create your account"
              : "Login to your account"}
          </p>
          <form action="">
            {state == "Sign Up" && (
              <div className="p-2">
                <input
                  className="border-2 border-red-500"
                  type="text"
                  placeholder="Full Name"
                  name=""
                  id=""
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
              </div>
            )}
            <div className="p-2">
              <input
                className="border-2 border-red-500"
                type="email"
                placeholder="Email"
                name=""
                id=""
                onChange={(e) => setEmail(e.target.value)}
                value={name}
                required
              />
            </div>
            <div className="p-2">
              <input
                className="border-2 border-red-500"
                type="Password"
                placeholder="Password"
                name=""
                id=""
                onChange={(e) => setPassword(e.target.value)}
                value={name}
                required
              />
            </div>
            <p>Forgot Password</p>
            <button className="border-2 border-purple-600 bg-white rounded-2xl px-2 py-1">
              {state}
            </button>
          </form>
          {state == "Sign Up" ? (
            <p>
              Already account ?
              <span
                className="cursor-pointer"
                onClick={() => setState("Login")}
              >
                Login Here
              </span>
            </p>
          ) : (
            <p>
              Dont account? ?
              <span
                className="cursor-pointer"
                onClick={() => setState("Sign Up")}
              >
                SignUp Here
              </span>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
