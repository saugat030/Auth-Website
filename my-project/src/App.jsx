import "./App.css";
import Homepage from "./Components/Homepage";
// import EmailVerifyPage from "./Components/EmailVerifyPage";
// import ResetPasswordPag from "./Components/ResetPasswordPage";
import LoginPage from "./Components/LoginPage";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/signup" element={<LoginPage name="signUp" />}></Route>
        <Route path="/login" element={<LoginPage name="login" />}></Route>
        {/* <Route path="/email-verify" element={<EmailVerifyPage />}></Route>
        <Route path="/reset-password" element={<ResetPasswordPage />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
