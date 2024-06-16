import Signup from "./components/Signup";
import Courses from "./courses/Courses";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import {Toaster} from "react-hot-toast"
import { useAuth } from "./context/AuthProvider";
const App = () => {
  const [authUser,setAuthUSer]=useAuth()
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster/>
    </>
  );
};

export default App;
