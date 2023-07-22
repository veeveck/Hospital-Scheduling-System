import React from "react";
import Layout from "./../components/Layout";
import { Form, Row, Col, Input, TimePicker } from "antd";

const ApplyDoctor = () => {
  const handleFinish = (values) => {
    console.log(values);
  };
  return (
    <Layout>
      <h1 className="text-center">ApplyDoctor</h1>
      <Form layout="vertical" onFinish={handleFinish} className="m-3">
        <h4>Personal Details </h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="First Name"
              name="firstName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your First Name" />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your Last Name" />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phone"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your Contact Number" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your Email" />
            </Form.Item>
            <Form.Item label="Website" name="website">
              <Input type="text" placeholder="Your Website" />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your Address" />
            </Form.Item>
          </Col>
        </Row>
        <h4>Professional Details </h4>
        <Row>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Specialization"
              name="specialization"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your Specialization" />
            </Form.Item>
            <Form.Item
              label="Experience"
              name="experience"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your Experience" />
            </Form.Item>
            <Form.Item
              label="Fees"
              name="fees"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your Fees per consultation" />
            </Form.Item>
            <Form.Item label="Timings" name="timings" required>
              <TimePicker.RangePicker />
            </Form.Item>
          </Col>
        </Row>
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary" type="Submit">
            Submit
          </button>
        </div>
      </Form>
    </Layout>
  );
};

export default ApplyDoctor;
