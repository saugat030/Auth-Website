import "./App.css";
import Homepage from "./Components/Homepage";
import Form from "./Components/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/signup" element={<Form name="signUp" />}></Route>
        <Route path="/login" element={<Form name="login" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
