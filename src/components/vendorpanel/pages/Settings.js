



import React, { useState } from "react";
import { FaBuilding, FaMobileAlt, FaPlug, FaLayerGroup, FaBell, FaReceipt } from "react-icons/fa";

const App = () => {
  const [selectedSetting, setSelectedSetting] = useState(null);

  // Content for each setting
  const settingDetails = {
    Company: {
      fields: [
        { label: "Name", type: "text", placeholder: "Enter company name" },
        { label: "Mobile", type: "text", placeholder: "Enter mobile number" },
        { label: "Email", type: "email", placeholder: "Enter email address" },
        { label: "Address", type: "text", placeholder: "Enter company address" },
        { label: "State of Supply", type: "text", placeholder: "Enter state of supply" },
        { label: "GSTIN", type: "text", placeholder: "Enter GSTIN" },
        { label: "Type", type: "text", placeholder: "Enter company type" },
        { label: "Currency", type: "text", placeholder: "Enter currency" },
        { label: "Timezone", type: "text", placeholder: "Enter timezone" },
      ],
    },
    "Mobile App": "Configure mobile app settings and notifications.",
    Integrations: "Manage API integrations and third-party services.",
    Templates: "Customize email and document templates.",
    Notifications: "Set up alerts and push notifications.",
    Taxes: "Manage tax settings and compliance.",
  };

  return (
    <>
      {/* Fixed Navigation Bar */}
      <div className="SettingNav">
        <h3>Settings</h3>
      </div>

      <div className="app-container">
        {/* Left Side Column (Sticky Sidebar) */}
        <div className="left-sidebar">
          {Object.keys(settingDetails).map((item) => (
            <div
              key={item}
              className={`sidebar-item ${selectedSetting === item ? "active" : ""}`}
              onClick={() => setSelectedSetting(item)}
            >
              {item === "Company" && <FaBuilding className="icon" />}
              {item === "Mobile App" && <FaMobileAlt className="icon" />}
              {item === "Integrations" && <FaPlug className="icon" />}
              {item === "Templates" && <FaLayerGroup className="icon" />}
              {item === "Notifications" && <FaBell className="icon" />}
              {item === "Taxes" && <FaReceipt className="icon" />}
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Right Side Content */}
        <div className="right-content">
          {selectedSetting ? (
            <div className="content-box">
              <h3>{selectedSetting}</h3>

              {/* Render fields for Company details */}
              {selectedSetting === "Company" && (
                <div className="company-fields">
                  {settingDetails[selectedSetting].fields.map((field, index) => (
                    <div
                      key={index}
                      className={`field ${field.label === "Timezone" ? "full-width" : ""}`}
                    >
                      <label>{field.label}</label>
                      <input type={field.type} placeholder={field.placeholder} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="content-placeholder">Select a setting to view details</div>
          )}
        </div>
      </div>

      {/* Styles */}
      <style>
        {`
          .app-container {
            display: flex;
            height: 100vh;
          }

          .left-sidebar {
            width: 250px;
            background-color: white;
            padding: 20px;
            color: #333;
            border-right: 1px solid #e0e0e0;
            position: sticky;
            top: 0;
            height: 100vh;
            overflow-y: auto;
          }

          .sidebar-item {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            cursor: pointer;
            color: #333;
            padding: 10px;
            border-radius: 5px;
            transition: background 0.3s;
          }

          .sidebar-item:hover,
          .sidebar-item.active {
            background: #e9ecef;
          }

          .sidebar-item .icon {
            margin-right: 10px;
            font-size: 15px;
            color: #555;
          }

          .right-content {
            flex: 1;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: flex-start;
          }

          .content-box {
            max-width: 700px;
            width: 100%;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 10px;
            background: white;
          }

          .content-box h3 {
            margin-top: 0;
          }

          .content-placeholder {
            font-size: 18px;
            color: #666;
          }

          .company-fields {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin-top: 20px;
          }

          .field {
            display: flex;
            flex-direction: column;
            flex: 1 1 calc(50% - 10px);
          }

          .field.full-width {
            flex: 1 1 100%;
          }

          .field label {
            font-weight: bold;
          }

          .field input {
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
            width: 100%;
          }

          .SettingNav {
            padding: 20px;
            background-color: white;
            border-bottom: 1px solid #e0e0e0;
          }

          .SettingNav h3 {
            margin: 0;
            color: #333;
          }

          @media (max-width: 768px) {
            .app-container {
              flex-direction: column;
            }

            .left-sidebar {
              width: 100%;
              display: flex;
              overflow-x: auto;
              white-space: nowrap;
              border-bottom: 1px solid #ddd;
              height: auto;
              position: relative;
              position: fixed;
            }
              

            .sidebar-item {
              flex: 1;
              text-align: center;
              padding: 15px;
            }

            .right-content {
              padding: 10px;
            }

            .company-fields {
              flex-direction: column;
            }

            .field {
              flex: 1 1 100%;
            }
          }
            
            
        `}
      </style>
    </>
  );
};

export default App;