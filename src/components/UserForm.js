import React, { useState, useEffect } from "react";

const UserForm = ({ user, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    } else {
      setFormData({ id: "", firstName: "", lastName: "", email: "", department: "" });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
  <input
    type="text"
    name="firstName"
    placeholder="First Name"
    value={formData.firstName}
    onChange={handleChange}
    className="border p-3 mb-4 w-full rounded-md"
  />
  <input
    type="text"
    name="lastName"
    placeholder="Last Name"
    value={formData.lastName}
    onChange={handleChange}
    className="border p-3 mb-4 w-full rounded-md"
  />
  <input
    type="email"
    name="email"
    placeholder="Email"
    value={formData.email}
    onChange={handleChange}
    className="border p-3 mb-4 w-full rounded-md"
  />
  <input
    type="text"
    name="department"
    placeholder="Department"
    value={formData.department}
    onChange={handleChange}
    className="border p-3 mb-4 w-full rounded-md"
  />
  <button type="submit" className="bg-green-500 text-white p-3 rounded-md w-full">
    {user ? "Update" : "Add"} User
  </button>
  <button
    type="button"
    onClick={onCancel}
    className="mt-4 bg-gray-500 text-white p-3 rounded-md w-full"
  >
    Cancel
  </button>
</form>

  );
};

export default UserForm;