import React, { useState } from "react";
import { db, collection, addDoc } from "./firebaseConfig";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
	ID:"",
    heartRate: "",
    bloodPressure: "",
    oxygenLevel: "",
    bodyTemperature: "",
	Sleeptime:""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "vitalSigns"), formData);
      alert("Vital signs submitted successfully!");
      setFormData({ name: "", ID:"", heartRate: "", bloodPressure: "", oxygenLevel: "", bodyTemperature: "", Sleeptime:"" });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Vital Signs Input Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="number" name="ID" placeholder="ID" value={formData.ID} onChange={handleChange} required />
        <input type="number" name="heartRate" placeholder="Heart Rate (BPM)" value={formData.heartRate} onChange={handleChange} required />
        <input type="text" name="bloodPressure" placeholder="Blood Pressure (e.g., 120/80)" value={formData.bloodPressure} onChange={handleChange} required />
        <input type="number" name="oxygenLevel" placeholder="Oxygen Level (%)" value={formData.oxygenLevel} onChange={handleChange} required />
        <input type="number" name="bodyTemperature" placeholder="Body Temperature (°C)" value={formData.bodyTemperature} onChange={handleChange} required />
        <input type="number" name="Sleeptime" placeholder="Sleeptime" value={formData.sleeptime} onChange={handleChange} required />
		<button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
