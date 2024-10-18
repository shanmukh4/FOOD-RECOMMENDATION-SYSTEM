import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Select from 'react-select';

const AdminPanel = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = (e) => {
    e.preventDefault();
    setSidebarVisible(!sidebarVisible); // Toggle the sidebar visibility
  };

  const closeSidebar = (e) => {
    e.preventDefault();
    setSidebarVisible(false); // Close the sidebar
  };
  const healthConditions = [
    { value: 'acidReflux', label: 'Acid Reflux' },
    { value: 'kidneyDisease', label: 'Kidney Disease' },
    { value: 'msgAllergy', label: 'MSG Allergy' },
    { value: 'ibs', label: 'Irritable Bowel Syndrome (IBS)' },
    { value: 'obesity', label: 'Obesity' },
    { value: 'highBloodPressure', label: 'High Blood Pressure' },
    { value: 'heartDisease', label: 'Heart Disease' }
  ];

  const [selectedConditions, setSelectedConditions] = useState([]);

  return (
    <div className="text-gray-800 font-inter">
      {/* sidenav */}
      <div
        className={`fixed left-0 top-0 w-64 h-full bg-[#f8f4f3] p-4 z-50 transition-transform transform ${
          sidebarVisible ? "translate-x-0" : "-translate-x-full"
        } 3xl:translate-x-0`} // Ensure it's visible on large screens
      >
        <a href="#" className="flex items-center pb-4 border-b border-b-gray-800">
          <h2 className="font-bold text-2xl">
            LOREM <span className="bg-[#f84525] text-white px-2 rounded-md">IPSUM</span>
          </h2>
        </a>
        <ul className="mt-4">
          <span className="text-gray-400 font-bold">ADMIN</span>
          <li className="mb-1 group">
            <a
              href="#"
              className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md"
            >
              <i className="ri-home-2-line mr-3 text-lg"></i>
              <span className="text-sm">Dashboard</span>
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/50 z-40 3xl:hidden sidebar-overlay ${
          sidebarVisible ? "" : "hidden"
        }`}
        onClick={closeSidebar}
      ></div>
      {/* end sidenav */}

      <main
        className={`w-full 3xl:w-[calc(100%-256px)] 3xl:ml-64 bg-gray-200 min-h-screen transition-all main ${
          sidebarVisible ? "active" : ""
        }`}
      >
        {/* navbar */}
        <div className="py-2 px-6 bg-[#f8f4f3] flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
          <button
            type="button"
            className="text-lg text-gray-900 font-semibold sidebar-toggle"
            onClick={toggleSidebar}
          >
            <i className="ri-menu-line"></i> Menu
          </button>
        </div>
        {/* end navbar */}
           {/* Main content area */}
           <div className="flex-1 p-4 w-full md:w-1/2">
          {/* Search bar with multi-select dropdown */}
          <div className="relative flex items-center space-x-2 max-w-md w-full">
            <div className="absolute top-1 left-2 inline-flex items-center p-2">
              <i className="fas fa-search text-gray-400"></i>
            </div>
            <input
              className="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline"
              type="search"
              placeholder="Search product..."
            />
            {/* Multi-select dropdown */}
            <Select
              isMulti
              options={healthConditions}
              className="w-full"
              placeholder="Select health conditions"
              onChange={setSelectedConditions}
              value={selectedConditions}
            />
          </div>

          {/* Container for graphs or additional content */}
          <div className="mt-8 bg-white p-4 shadow rounded-lg">
            <div className="bg-white p-4 rounded-md mt-4">
              <h2 className="text-gray-500 text-lg font-semibold pb-4">Transactions</h2>
              <div className="text-right mt-4">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                  View More
                </button>
              </div>
            </div>
          </div>

          {/* Third container */}
          <div className="mt-8 bg-white p-4 shadow rounded-lg">
            <h2 className="text-gray-500 text-lg font-semibold pb-4">Pending Authorizations</h2>
            <div className="my-1"></div> {/* Spacer */}
            <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
            <table className="w-full table-auto text-sm">
              <thead>
                <tr className="text-sm leading-normal">
                  <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                    Photo
                  </th>
                  <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                    Name
                  </th>
                  <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-grey-lighter">
                  <td className="py-2 px-4 border-b border-grey-light">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="Profile"
                      className="rounded-full h-10 w-10"
                    />
                  </td>
                  <td className="py-2 px-4 border-b border-grey-light">Juan Pérez</td>
                  <td className="py-2 px-4 border-b border-grey-light">Commerce</td>
                </tr>
              </tbody>
            </table>
            <div className="text-right mt-4">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                View More
              </button>
            </div>
          </div>

          {/* Graphs or other content */}
          <div className="mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
            <div className="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
              <h2 className="text-gray-500 text-lg font-semibold pb-1">Users</h2>
            </div>

            <div className="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
              <h2 className="text-gray-500 text-lg font-semibold pb-1">Businesses</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
