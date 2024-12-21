import React from "react";

const Form = (props) => {
  if (props.name == "signUp") {
    return <div>SignUp</div>;
  } else {
    return <div>Login</div>;
  }
};

export default Form;
