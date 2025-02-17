import React, { useEffect, useState } from "react";
import { api_url } from "../../../helpers/api_helper";

const ProfilePage = () => {
  const [vendorData, setVendorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = 1; // Replace with dynamic user ID (from auth context or params)

  useEffect(() => {
    const fetchVendorData = async () => {
      try {
        const response = await fetch(`${api_url}/api/users/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("Response status:", response.status); // Debugging

        if (!response.ok) {
          throw new Error(`Failed to fetch vendor data: ${response.statusText}`);
        }

        const result = await response.json();
        console.log("Fetched data:", result); // Debugging

        // Access the nested `data` object
        if (result.statusCode === 200 && result.data) {
          setVendorData(result.data);
        } else {
          throw new Error("Invalid data format received from the API");
        }
      } catch (error) {
        console.error("Error fetching vendor data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVendorData();
  }, [userId]);

  if (loading) {
    return <p>Loading profile...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!vendorData) {
    return <p>No profile data found.</p>;
  }

  return (
    <div className="profile-container">
      <h1 className="mt-3 mb-3">Vendor Profile</h1>
      <div className="profile-details">
        <p><strong>Name:</strong> {vendorData.firstName} {vendorData.lastName}</p>
        <p><strong>Email:</strong> {vendorData.email}</p>
        <p><strong>Mobile:</strong> {vendorData.mobile}</p>
        <p><strong>Gender:</strong> {vendorData.gender}</p>
        <p><strong>City:</strong> {vendorData.city}</p>
        <p><strong>Address:</strong> {vendorData.address}</p>
      </div>
    </div>
  );
};

export default ProfilePage;