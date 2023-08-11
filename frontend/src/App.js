import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Login from "./pages/Auth/Login.js";
import Register from "./pages/Auth/Register.js";
import Forgot from "./pages/Auth/Forgot.js";
import Reset from "./pages/Auth/Reset.js";
import Sidebar from "./components/sidebar/Sidebar.js";
import Dashboard from "./pages/dashboard/Dashboard.js";
import Layout from "./components/layout/Layout.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/resetpassword/:resetToken" element={<Reset />} />
        <Route
          path="/dashboard"
          element={
            <Sidebar>
              <Layout>
                <Dashboard />
              </Layout>
            </Sidebar>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
