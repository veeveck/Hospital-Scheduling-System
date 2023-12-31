import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Row } from "antd";
import DoctorList from "../components/DoctorList";

const HomePage = () => {
  const [doctors, setDoctors] = useState([]);
  //User data
  const getUserData = async () => {
    try {
      const res = await axios.get("/api/v1/user/get-all-doctors", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div>
      <Layout>
        <h1 className="text-center">HomePage</h1>
        <Row>{doctors && doctors.map((doc) => <DoctorList doc={doc} />)}</Row>
      </Layout>
    </div>
  );
};

export default HomePage;
