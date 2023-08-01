import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DatePicker, TimePicker } from "antd";
import moment from "moment";

const BookingPage = () => {
  const params = useParams();
  const [doctors, setDoctors] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isAvailable, setIsAvailable] = useState();
  //User data
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/doctor/getDocById",
        { docId: params.docId },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
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
    <Layout>
      <h1>BookingPage</h1>
      <div className="container m-2">
        {doctors && (
          <div>
            <h4>
              Dr. {doctors.firstName} {doctors.lastName}
            </h4>
            <h4> Fees : {doctors.fees}</h4>
            <h4>
              {" "}
              Timings : {doctors.timings &&
                doctors.timings[0].slice(11, 16)} -{" "}
              {doctors.timings && doctors.timings[1].slice(11, 16)}
            </h4>
          </div>
        )}
      </div>
      <div className="d-flex flex-column w-50">
        <DatePicker
          className="m-2"
          format="DD-MM-YYYY"
          onChange={(value) => setDate(moment(value).format("DD-MM-YYYY"))}
        />
        <TimePicker.RangePicker
          className="m-2"
          format="HH:mm"
          onChange={(value) => setTime(moment(value).format("HH:mm"))}
        />
        <button className="btn btn-primary mt-2">Check Availability</button>
      </div>
    </Layout>
  );
};

export default BookingPage;
