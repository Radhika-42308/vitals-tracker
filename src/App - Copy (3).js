import React, { useState } from "react";
import { db, collection, addDoc } from "./firebaseConfig";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    ID: "",
    heartRate: "",
    bloodPressure: "",
    oxygenLevel: "",
    bodyTemperature: "",
    sleepTime: "",
    date: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "vitalSigns"), formData);
      alert("Vital signs submitted successfully!");
      setFormData({ name: "", ID: "", heartRate: "", bloodPressure: "", oxygenLevel: "", bodyTemperature: "", sleepTime: "", date: "" });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#e6f7ff", minHeight: "100vh" }}>
      <h2 style={{ textAlign: "center", color: "#006d77" }}>Medi-Watch: Patient Health Data Collection</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "auto", padding: "20px", backgroundColor: "#d4edda", borderRadius: "8px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>ID:</label>
          <input type="number" name="ID" value={formData.ID} onChange={handleChange} required style={inputStyle} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required style={inputStyle} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Heart Rate (BPM):</label>
          <input type="number" name="heartRate" value={formData.heartRate} onChange={handleChange} required style={inputStyle} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Blood Pressure (e.g., 120/80):</label>
          <input type="text" name="bloodPressure" value={formData.bloodPressure} onChange={handleChange} required style={inputStyle} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Oxygen Level (%):</label>
          <input type="number" name="oxygenLevel" value={formData.oxygenLevel} onChange={handleChange} required style={inputStyle} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Body Temperature (°C):</label>
          <input type="number" name="bodyTemperature" value={formData.bodyTemperature} onChange={handleChange} required style={inputStyle} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Sleep Time (Hours):</label>
          <input type="number" name="sleepTime" value={formData.sleepTime} onChange={handleChange} required style={inputStyle} />
        </div>
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  marginTop: "5px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#28a745",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  marginTop: "10px",
};

export default App;
