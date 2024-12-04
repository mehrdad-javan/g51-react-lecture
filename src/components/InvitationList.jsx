import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCheck, FaTimes } from "react-icons/fa";

const InvitationList = () => {
  const apiEndPoint = "http://localhost:8080/api/invitations";

  const [invitations, setInvitations] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetchAllInvitations();
  }, [reload]);

  const fetchAllInvitations = async () => {
    console.log("Step1: Starting to fetch invitations...");
    await axios
      .get(apiEndPoint)
      .then((response) => {
        console.log("Step2: Response received.", response);
        if (response.status === 200) {
          console.log("response data is: ", response.data);
          setInvitations(response.data);
        } else {
          console.log("Unexpected response status:", response.status);
        }
      })
      .catch((error) => {
        console.log("Error occured during the API call.");
      });
    console.log("Step3: Finished fetching invitations.");
  };

  const updateInvitationStatus = async (id, newStatus) => {
    try {
      const response = await axios.put(
        `${apiEndPoint}/${id}?status=${newStatus}`
      );
      if (response.status === 204) {
        setReload(!reload);
        console.log("Invitation status updated successfully.");
      }
    } catch (error) {
      console.log("Error updating invitation:", error);
    }
  };
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Invitations</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Invitation</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {invitations.map((invitation, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{invitation.title}</td>
                <td>{invitation.date}</td>
                <td>{invitation.time}</td>
                <td>{invitation.location}</td>
                <td>
                  <span
                    className={`badge ${
                      invitation.status === "accepted"
                        ? "bg-success"
                        : invitation.status === "declined"
                        ? "bg-danger"
                        : "bg-warning"
                    }`}
                  >
                    {invitation.status}
                  </span>
                </td>
                <td>
                  {invitation.status === "pending" && (
                    <>
                      <button
                        className="btn btn-sm btn-success"
                        onClick={() =>
                          updateInvitationStatus(invitation.id, "accepted")
                        }
                      >
                        <FaCheck />
                      </button>
                      <button className="btn btn-sm btn-danger">
                        <FaTimes />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvitationList;
