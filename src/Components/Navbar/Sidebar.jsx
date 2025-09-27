import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import dashboardicon from "../../../src/assets/clarity_dashboard-line.svg";
import dashboardicon2 from "../../../src/assets/dashboard-icon.svg";
import orders from "../../../src/assets/task.svg";
import orders2 from "../../../src/assets/active-task.svg";
import Customers from "../../../src/assets/profile-2user.svg";
import Customers2 from "../../../src/assets/activeprofile-2user.svg";
import Products from "../../../src/assets/box.svg";
import Products2 from "../../../src/assets/box2.svg";
import ServiceArea from "../../../src/assets/global.svg";
import ServiceArea2 from "../../../src/assets/global2.svg";
import AdminPanel from "../../../src/assets/flag.svg";
import AdminPanel2 from "../../../src/assets/flag2.svg";
import Reports from "../../../src/assets/note.svg";
import Reports2 from "../../../src/assets/note2.svg";
import Settings from "../../../src/assets/setting-2.svg";
import TeamHub from "../../../src/assets/people.svg";
import HelpFeedback from "../../../src/assets/info-circle.svg";
import InviteTeam from "../../../src/assets/add.svg";
import { RiArrowDropDownLine } from "react-icons/ri";

const Sidebar = () => {
  const [openExtra, setOpenExtra] = useState(false);

  const linkClasses =
    "flex items-center gap-3 px-4 py-2 montserrat-fontsfamily font-[500] text-[14px] text-[#121417] transition-colors duration-200";
  const activeClasses =
    "bg-[#F0F2F5] font-[600] border-l-4 border-[#1D3557] montserrat-fontsfamily";

  return (
    <div className="hide-scrollbar w-64 max-w-full h-full flex flex-col bg-[#FFFFFF] mt-5 px-5 overflow-y-auto overflow-x-hidden">
      {/* Section One */}
      <div>
        <ul className="space-y-2 mt-2 mb-10">
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
                    className="w-7"
                    src={isActive ? dashboardicon2 : dashboardicon}
                    alt="dashboard"
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
                  <img
                    className="w-7"
                    src={isActive ? orders2 : orders}
                    alt="orders"
                  />
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
                    className="w-7"
                    src={isActive ? Customers2 : Customers}
                    alt="customers"
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
              {({ isActive }) => (
                <>
                  <img
                    className="w-7"
                    src={isActive ? Products2 : Products}
                    alt="products"
                  />
                  Products
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ServiceArea"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? activeClasses : ""}`
              }
              style={({ isActive }) => (isActive ? { color: "#1D3557" } : {})}
            >
              {({ isActive }) => (
                <>
                  <img
                    className="w-7"
                    src={isActive ? ServiceArea2 : ServiceArea}
                    alt="service-area"
                  />
                  Service Area
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AdminPanel"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? activeClasses : ""}`
              }
              style={({ isActive }) => (isActive ? { color: "#1D3557" } : {})}
            >
              {({ isActive }) => (
                <>
                  <img
                    className="w-7"
                    src={isActive ? AdminPanel2 : AdminPanel}
                    alt="admin-panel"
                  />
                  Admin Panel
                </>
              )}
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
              {({ isActive }) => (
                <>
                  <img
                    className="w-7"
                    src={isActive ? Reports2 : Reports}
                    alt="reports"
                  />
                  Reports
                </>
              )}
            </NavLink>
          </li>
        </ul>

        {/* Toggle button for Section Two */}
        <button
          onClick={() => setOpenExtra(!openExtra)}
          className="cursor-pointer montserrat-fontsfamily w-full flex items-center mt-4 px-2 font-[400] text-[14px] text-[#121417] transition"
        >
          <span>{openExtra ? "Less" : "More"}</span>
          <RiArrowDropDownLine
            className={`transition-transform duration-300 text-[#121417] ${openExtra ? "rotate-180" : "rotate-0"
              }`}
            size={20}
          />
        </button>
        {/* Section Two (slide toggle) */}
        <div
          className={`transition-all duration-500 overflow-hidden ${openExtra ? "max-h-96 mt-3" : "max-h-0"
            }`}
        >
          <ul className="space-y-1">
            <li>
              <div className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-gray-100 cursor-default">
                <img className="w-7" src={Settings} alt="" />
                <span className="text-[#1D3557]">Settings</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-gray-100 cursor-default">
                <img className="w-7" src={TeamHub} alt="" />
                <span className="text-[#1D3557]">Team Hub</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-gray-100 cursor-default">
                <img className="w-7" src={HelpFeedback} alt="" />
                <span className="text-[#1D3557]">Help & Feedback</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-gray-100 cursor-default">
                <img className="w-7" src={InviteTeam} alt="" />
                <span className="text-[#1D3557]">Invite Team</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
