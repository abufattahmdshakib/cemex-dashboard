import React from "react";
import { NavLink } from "react-router-dom";
import dashboardicon from "../../../src/assets/clarity_dashboard-line.svg";
import dashboardicon2 from "../../../src/assets/dashboard-icon.svg";
import orders from "../../../src/assets/task.svg";
import orders2 from "../../../src/assets/active-task.svg";
import Customers from "../../../src/assets/profile-2user.svg";
import Customers2 from "../../../src/assets/activeprofile-2user.svg";
import Products from "../../../src/assets/box.svg";
import ServiceArea from "../../../src/assets/global.svg";
import AdminPanel from "../../../src/assets/flag.svg";
import Reports from "../../../src/assets/note.svg";
import Settings from "../../../src/assets/setting-2.svg";
import TeamHub from "../../../src/assets/people.svg";
import HelpFeedback from "../../../src/assets/info-circle.svg";
import InviteTeam from "../../../src/assets/add.svg";

const Sidebar = () => {
  const linkClasses =
    "flex items-center gap-3 px-4 py-2 montserrat-fontsfamily font-[500] text-[14px] text-[#121417] transition-colors duration-200";
  const activeClasses =
    "bg-[#F0F2F5] font-[600] border-l-4 border-[#1D3557]";

  return (
    <div className="w-64 h-screen flex flex-col justify-between border-r border-gray-200 bg-[#FFFFFF] mb-8 mt-5 px-5">
      {/* Section One */}
      <div>
        <ul className="space-y-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? activeClasses : ""}`
              }
              style={({ isActive }) => (isActive ? { color: "#1D3557" } : {})}
            >
              {({ isActive }) => (
                <>
                  <img
                    className="w-7" src={isActive ? dashboardicon2 : dashboardicon} alt="dashboard"
                  />
                  Dashboard
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? activeClasses : ""}`
              }
              style={({ isActive }) => (isActive ? { color: "#1D3557" } : {})}
            >
              {({ isActive }) => (
                <>
                  <img className="w-7" src={isActive ? orders2 : orders} alt="orders" />
                  Orders
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/customers"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? activeClasses : ""}`
              }
              style={({ isActive }) => (isActive ? { color: "#1D3557" } : {})}
            >
              {({ isActive }) => (
                <>
                  <img
                    className="w-7" src={isActive ? Customers2 : Customers} alt="dashboard"
                  />
                  Customers
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? activeClasses : ""}`
              }
              style={({ isActive }) => (isActive ? { color: "#1D3557" } : {})}
            >
              <img className="w-7" src={Products} alt="" />
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service-area"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? activeClasses : ""}`
              }
              style={({ isActive }) => (isActive ? { color: "#1D3557" } : {})}
            >
              <img className="w-7" src={ServiceArea} alt="" />
              Service Area
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? activeClasses : ""}`
              }
              style={({ isActive }) => (isActive ? { color: "#1D3557" } : {})}
            >
              <img className="w-7" src={AdminPanel} alt="" />
              Admin Panel
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? activeClasses : ""}`
              }
              style={({ isActive }) => (isActive ? { color: "#1D3557" } : {})}
            >
              <img className="w-7" src={Reports} alt="" />
              Reports
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Section Two */}
      <div>
        <ul className="space-y-1">
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? activeClasses : ""}`
              }
              style={({ isActive }) => (isActive ? { color: "#1D3557" } : {})}
            >
              <img className="w-7" src={Settings} alt="" />
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team-hub"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? activeClasses : ""}`
              }
              style={({ isActive }) => (isActive ? { color: "#1D3557" } : {})}
            >
              <img className="w-7" src={TeamHub} alt="" />
              Team Hub
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/help"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? activeClasses : ""}`
              }
              style={({ isActive }) => (isActive ? { color: "#1D3557" } : {})}
            >
              <img className="w-7" src={HelpFeedback} alt="" />
              Help & Feedback
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/invite"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? activeClasses : ""}`
              }
              style={({ isActive }) => (isActive ? { color: "#1D3557" } : {})}
            >
              <img className="w-7" src={InviteTeam} alt="" />
              Invite Team
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
