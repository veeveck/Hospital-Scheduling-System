import React from "react";
import { Form, Input } from "antd";
import "../styles/RegisterStyle.css";
import { Link } from "react-router-dom";

const Login = () => {
  const onFinishHandler = (values) => {
    console.log(values);
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
