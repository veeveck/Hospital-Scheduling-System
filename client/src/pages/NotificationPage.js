import React from "react";
import Layout from "./../components/Layout";
import { Tabs, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const NotificationPage = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleMarkAllRead = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/get-notifications",
        { userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong");
    }
  };
  const handleDeleteAllRead = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/delete-notifications",
        { userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong in notifications");
    }
  };

  return (
    <Layout>
      <h4 className="p-3 text-center">NotificationPage</h4>
      <Tabs>
        <Tabs.TabPane tab="Unread" key={0}>
          <div className="d-flex justify-content-end">
            <h4 className="p-2" onClick={handleMarkAllRead}>
              Mark all read
            </h4>
          </div>
          {user?.notification.map((msg) => (
            <div
              className="card"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(msg.onClickPath)}
            >
              <div className="card-text">{msg.message}</div>
            </div>
          ))}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Read" key={1}>
          <div className="d-flex justify-content-end">
            <h4
              className="p-2 text-primary"
              style={{ cursor: "pointer" }}
              onClick={handleDeleteAllRead}
            >
              Delete all read
            </h4>
          </div>
          {user?.notificationview.map((msg) => (
            <div
              className="card"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(msg.onClickPath)}
            >
              <div className="card-text">{msg.message}</div>
            </div>
          ))}
        </Tabs.TabPane>
      </Tabs>
    </Layout>
  );
};

export default NotificationPage;
