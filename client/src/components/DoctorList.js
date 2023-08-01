import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorList = ({ doc }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="card m-2"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`book-appointment/${doc._id}`)}
      >
        <div className="card-reader">
          Dr. {doc.firstName} {doc.lastName}
        </div>
        <div className="card-body">
          <p>
            <b>Specialization : </b> {doc.specialization}
          </p>
          <p>
            <b>Experience : </b> {doc.experience}
          </p>
          <p>
            <b>Fees : </b> {doc.fees}
          </p>
          <p>
            <b>Timings : </b> {doc.timings[0].slice(11, 16)} -{" "}
            {doc.timings[1].slice(11, 16)}
          </p>
        </div>
      </div>
    </>
  );
};

export default DoctorList;
