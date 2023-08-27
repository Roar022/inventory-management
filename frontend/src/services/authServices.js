import axios from "axios";
import { toast } from "react-toastify";
export const BACKEND_URL = process.env.REACT_APP_BACKED_URL;

export const validateEmail = (email) => {
  return email.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
};

// register user
export const registerUser = async (userData) => {
  try {
    // withCrediantials:true =>  to include credentials (cookies and authentication headers) in the request and to expose cookies to the response.
    const response = await axios.post(
      // take 3 parameters, 2 are important
      // 1) url,
      // 2) data,
      // 3) credentials, allow cookie to save in browser
      `${BACKEND_URL}/api/users/register`,
      userData,
      { withCredentials: true }
    );
    // property
    if (response.statusText === "OK") {
      toast.success("User Regitsered successfully");
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// login user
export const loginUser = async (userData) => {
  try {
    // console.log("login triigerd")
    // withCrediantials:true =>  to include credentials (cookies and authentication headers) in the request and to expose cookies to the response.
    const response = await axios.post(
      `${BACKEND_URL}/api/users/login`,
      userData
      //   { withCredentials: true } ==> because we already used in app.js
    );
    // property
    if (response.statusText === "OK") {
      toast.success("Login successfully");
    }
    // console.log(response.data);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// Logout user
// we only need to pass function that will clear data from lacalstorage
export const logoutUser = async () => {
  try {
    // withCrediantials:true =>  to include credentials (cookies and authentication headers) in the request and to expose cookies to the response.
    await axios.get(
      `${BACKEND_URL}/api/users/logout`
      //   { withCredentials: true } ==> because we already used in app.js
    );
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// Forgot Password
// we only need to pass function that will clear data from localstorage
export const forgotPassword = async (userData) => {
  try {
    // withCrediantials:true =>  to include credentials (cookies and authentication headers) in the request and to expose cookies to the response.
    const response = await axios.post(
      `${BACKEND_URL}/api/users/forgotpassword`,
      userData
      //   { withCredentials: true } ==> because we already used in app.js
    );
    toast.success(response.data.message);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// Reset Password
export const resetPassword = async (userData, resetToken) => {
  try {
    // withCrediantials:true =>  to include credentials (cookies and authentication headers) in the request and to expose cookies to the response.
    const response = await axios.put(
      `${BACKEND_URL}/api/users/resetpassword/${resetToken}`,
      userData
      //   { withCredentials: true } ==> because we already used in app.js
    );
    return response.data;
    // toast.success(response.data.message);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};
// Get Login Status
// we only need to pass function that will clear data from lacalstorage
export const getLoginStatus = async () => {
  try {
    // withCrediantials:true =>  to include credentials (cookies and authentication headers) in the request and to expose cookies to the response.
    const response = await axios.get(
      `${BACKEND_URL}/api/users/loggedin`
      //   { withCredentials: true } ==> because we already used in app.js
    );
    // true or false
    return response.data;
    // toast.success(response.data.message);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// Get a user
export const getUser = async () => {
  try {
    // withCrediantials:true =>  to include credentials (cookies and authentication headers) in the request and to expose cookies to the response.
    const response = await axios.get(
      `${BACKEND_URL}/api/users/getuser`
      //   { withCredentials: true } ==> because we already used in app.js
    );
    // true or false
    return response.data;
    // toast.success(response.data.message);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// Update Profile
export const updateUser = async (formData) => {
  try {
    // withCrediantials:true =>  to include credentials (cookies and authentication headers) in the request and to expose cookies to the response.
    const response = await axios.patch(
      `${BACKEND_URL}/api/users/updateuser`,
      formData
      //   { withCredentials: true } ==> because we already used in app.js
    );
    // true or false
    return response.data;
    // toast.success(response.data.message);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// Update Profile
export const changePassword = async (formData) => {
  try {
    // withCrediantials:true =>  to include credentials (cookies and authentication headers) in the request and to expose cookies to the response.
    const response = await axios.patch(
      `${BACKEND_URL}/api/users/updatepassword`,
      formData
      //   { withCredentials: true } ==> because we already used in app.js
    );
    // true or false
    return response.data;
    // toast.success(response.data.message);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};
