import React from "react";
import styles from "./auth.module.scss";
import { MdPassword } from "react-icons/md";
import Card from "../../components/card/Card";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { resetPassword } from "../../services/authServices";
const initialState = {
  password: "",
  password2: "",
};
const Reset = () => {
  const { resetToken } = useParams();
  const [formData, setFormData] = React.useState(initialState);
  const { password, password2 } = formData;

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const reset = async (e) => {
    e.preventDefault();

    if (!password || password2) {
      return toast.error("ALL fields are required");
    }
    if (password.length < 6) {
      return toast.error("Password must be upto 6 characters");
    }
    if (password !== password2) {
      return toast.error("Password do not match");
    }

    const userData = {
      password,
      password2,
    };
    // setIsLoading(true);
    try {
      const data = await resetPassword(userData, resetToken);
      toast.success(data.message);
      // navigate("/login");
      // setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      // setIsLoading(false);
    }
  };  
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <MdPassword size={35} color="#999" />
          </div>
          <h2>Reset Password</h2>
          <form onSubmit={reset}>
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              required
              name="password2"
              value={password2}
              onChange={handleInputChange}
            />
            <button type="submit" className="--btn --btn-primary --btn-block">
              Reset Password
            </button>
            <div className={styles.links}>
              <p>
                <Link to="/">- Home</Link>
              </p>
              <p>
                <Link to="/login">- Login</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Reset;
