import React, { useContext, useState } from "react";
import NavBar from "./NavBar";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();
  const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContent);
  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      axios.defaults.withCredentials = true;
      //Send cookie so we send withCrediantials
      if (state == "Sign Up") {
        const { data } = await axios.post(backendUrl + "/register", {
          name,
          email,
          password,
        });
        console.log(data.success);
        if (data.success) {
          //.success is the object we created in the backend ourself.
          setIsLoggedin(true);
          toast.success(data.message);
          console.log(data.message);
          getUserData();
          navigate("/");
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/login", {
          email,
          password,
        });
        if (data.success) {
          setIsLoggedin(true);
          getUserData();
          navigate("/");
        } else {
          toast.error(data.message);
        }
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
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
          <form action="" onSubmit={onSubmitHandler}>
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
                value={email}
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
                value={password}
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
