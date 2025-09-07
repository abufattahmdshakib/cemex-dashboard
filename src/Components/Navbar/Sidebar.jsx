import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-900 text-white p-4 space-y-4">
      <h2 className="text-xl font-semibold mb-4">Menu</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/dashboard" className="block hover:bg-gray-700 p-2 rounded">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/dashboard/users" className="block hover:bg-gray-700 p-2 rounded">
            Users
          </Link>
        </li>
        <li>
          <Link to="/dashboard/reports" className="block hover:bg-gray-700 p-2 rounded">
            Reports
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
