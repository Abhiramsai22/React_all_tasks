
import React, { useState } from "react";

const LoginForm = () => {
  const fields = ["email", "password"];
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${formData.email}, Password: ${formData.password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field}>
          <input
            type={field === "password" ? "password" : "text"}
            name={field}
            placeholder={field}
            value={formData[field]}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
