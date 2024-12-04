import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import InvitationList from "./InvitationList";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className={{ display: "flex", height: "100vh" }}>
      <aside
        style={{
          width: "250px",
          background: "#f8f9fa",
          padding: "16px",
          borderRight: "1px solid #ddd ",
        }}
      >
        <h3>Dashboard</h3>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <button className="btn btn-outline-primary w-100 mb-2">
                Meeting Calendar
              </button>
            </li>
            <li>
              <button
                className="btn btn-outline-primary w-100 mb-2"
                onClick={() => navigate("/dashboard/invitations")}
              >
                Invitation List
              </button>
            </li>
            <li>
              <button className="btn btn-outline-primary w-100 mb-2">
                Manage Users
              </button>
            </li>
          </ul>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: "16px" }}>
        <Routes>
          <Route path="invitations" element={<InvitationList />} />
          {/* add more routers as needed :) */}
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;
