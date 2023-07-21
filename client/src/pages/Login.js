import React from "react";
import { Form, Input, message } from "antd";
import "../styles/RegisterStyle.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const onFinishHandler = async (values) => {
    try {
      const res = axios.post("/api/v1/user/login", values);
      if ((await res).data.success) {
        localStorage.setItem("token", (await res).data.token);
        message.success("Login Succesfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong");
    }
  };
  return (
    <div className="form-container">
      <Form
        layout="vertical"
        onFinish={onFinishHandler}
        className="register-form"
      >
        <h3 className="text-center">Login</h3>
        <Form.Item label="Email" name="email">
          <Input type="email" placeholder="Enter Email" required />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" placeholder="Enter Password" required />
        </Form.Item>
        <Link to="/register" className="m-2">
          Not A User , Register!!
        </Link>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </Form>
    </div>
  );
};

export default Login;
