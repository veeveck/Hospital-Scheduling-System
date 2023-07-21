import React from "react";
import { Form, Input, message } from "antd";
import "../styles/RegisterStyle.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/register", values);
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Registered Successfully");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong");
    }
  };
  return (
    <>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onFinishHandler}
          className="register-form"
        >
          <h3 className="text-center">Register</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" placeholder="Enter Name" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" placeholder="Enter Email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" placeholder="Enter Password" required />
          </Form.Item>
          <Link to="/login" className="m-2">
            Already Registered, Login!!
          </Link>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      </div>
    </>
  );
};

export default Register;
