import React from "react";
import { Form, Input } from "antd";
import "../styles/RegisterStyle.css";
import { Link } from "react-router-dom";

const Register = () => {
  const onFinishHandler = (values) => {
    console.log(values);
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
