import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Login from "./pages/Auth/Login.js";
import Register from "./pages/Auth/Register.js";
import Forgot from "./pages/Auth/Forgot.js";
import Reset from "./pages/Auth/Reset.js";
import Sidebar from "./components/sidebar/Sidebar.js";
import Dashboard from "./pages/dashboard/Dashboard.js";
import Layout from "./components/layout/Layout.js";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getLoginStatus } from "./services/authServices.js";
import { SET_LOGIN } from "./redux/features/auth/authSlice.js";
import AddProduct from "./pages/addProduct/AddProduct.js";
import ProductDetail from "./components/product/productDetail/ProductDetail.js";
import EditProduct from "./pages/editProduct/EditProduct.js";
import Profile from "./pages/profile/Profile.js";
import EditProfile from "./pages/profile/EditProfile.js";
import Contact from "./pages/contact/Contact.js";

axios.defaults.withCredentials = true;
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loginStatus() {
      // true or false
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    }
    loginStatus();
  }, [dispatch]);
  // to include credentials (cookies and authentication headers) in the request and to expose cookies to the response, every time

  return (
    <BrowserRouter>
      <ToastContainer />
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
        <Route
          path="/add-product"
          element={
            <Sidebar>
              <Layout>
                <AddProduct />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/product-detail/:id"
          element={
            <Sidebar>
              <Layout>
                <ProductDetail />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/edit-product/:id"
          element={
            <Sidebar>
              <Layout>
                <EditProduct />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/profile"
          element={
            <Sidebar>
              <Layout>
                <Profile />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <Sidebar>
              <Layout>
                <EditProfile />
              </Layout>
            </Sidebar>
          }
          />
        <Route
          path="/contact-us"
          element={
            <Sidebar>
              <Layout>
                <Contact />
              </Layout>
            </Sidebar>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
