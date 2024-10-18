import React, { useState } from 'react';
import Select from 'react-select';

const Dashboard = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Toggle sidebar visibility

    const toggleSidebar = (e) => {
      e.preventDefault();
      setSidebarVisible(!sidebarVisible); // Toggle the sidebar visibility
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
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Top navigation bar */}
      <div className="bg-white text-white shadow w-full p-2 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center">
            {/* Displayed on all devices */}
            <img
              src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png"
              alt="Logo"
              className="w-28 h-18 mr-2"
            />
            <h2 className="font-bold text-xl text-gray-700">Application Name</h2>
          </div>
        </div>

        {/* Button to toggle sidebar */}
        <div className="flex items-center">
          <button onClick={toggleSidebar} className="text-gray-500 text-lg p-2">
            <i className={`fas ${sidebarVisible ? 'fa-times' : 'fa-bars'}`}>button</i>
          </button>
        </div>

        {/* Notification and profile icons */}
        <div className="space-x-5">
          <button>
            <i className="fas fa-bell text-gray-500 text-lg"></i>
          </button>
          <button>
            <i className="fas fa-user text-gray-500 text-lg"></i>
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-wrap">
        {/* Left navigation sidebar */}
        <div
          className={`p-2 bg-white w-full md:w-60 flex flex-col transition-all duration-300 ease-in-out ${
            sidebarVisible ? 'block' : 'hidden'
          } md:block`}
        >
          <nav>
            <a
              className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
              href="#"
            >
              <i className="fas fa-home mr-2"></i>Home
            </a>
          </nav>

          <a
            className="block text-gray-500 py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white mt-auto"
            href="#"
          >
            <i className="fas fa-sign-out-alt mr-2"></i>Log Out
          </a>

          <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mt-2"></div>
          <p className="mb-1 px-5 py-3 text-left text-xs text-cyan-500">
            Copyright WCSLAT@2023
          </p>
        </div>

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
      </div>
    </div>
  );
};

export default Dashboard;
