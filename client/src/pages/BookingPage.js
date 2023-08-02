import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DatePicker, TimePicker } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import { message } from "antd";

const BookingPage = () => {
  const params = useParams();
  const [doctors, setDoctors] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isAvailable, setIsAvailable] = useState();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
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
  const handleBooking = async () => {
    try {
      setIsAvailable(true);
      if (!date && !time) {
        return alert("Date & Time is required");
      }
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/book-appointment",
        {
          docId: params.docId,
          userid: user._id,
          docInfo: doctors,
          date: date,
          userInfo: user,
          time: time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };
  const handleAvailability = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/check-availability",
        {
          docId: params.docId,
          date,
          time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        setIsAvailable(true);
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
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
          onChange={(value) => {
            setIsAvailable(false);
            setDate(moment(value).format("DD-MM-YYYY"));
          }}
        />
        <TimePicker
          className="m-2"
          format="HH:mm"
          onChange={(value) => {
            setIsAvailable(false);
            setTime(moment(value).format("HH:mm"));
          }}
        />
        <button className="btn btn-primary mt-2" onClick={handleAvailability}>
          Check Availability
        </button>
        {!isAvailable && (
          <button className="btn btn-dark mt-2" onClick={handleBooking}>
            Book Now
          </button>
        )}
      </div>
    </Layout>
  );
};

export default BookingPage;
