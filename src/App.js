import React, { useState, useEffect } from "react";
import { fetchUsers, addUser, updateUser, deleteUser } from "./services/api";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
      } catch (err) {
        setError("Failed to fetch users. Please try again later.");
      }
    };
    loadUsers();
  }, []);

  const handleAddOrUpdateUser = async (user) => {
    try {
      if (user.id) {
        const updatedUser = await updateUser(user);
        setUsers(users.map(u => (u.id === updatedUser.id ? updatedUser : u)));
      } else {
        const newUser = await addUser(user);
        setUsers([...users, newUser]);
      }
      setSelectedUser(null);
    } catch (err) {
      setError("Failed to save user. Please try again later.");
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      setError("Failed to delete user. Please try again later.");
    }
  };

  return (
    <div className="container">
  <h1 
  style={{
    color: 'white', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    margin: 0,          // Removes default margin from body that may affect centering
    padding: 20
  }}
>
  User Management Dashboard
</h1>
  {error && <p className="text-red-500 text-center">{error}</p>}

  <UserForm
    user={selectedUser}
    onSave={handleAddOrUpdateUser}
    onCancel={() => setSelectedUser(null)}
  />

  <div className="table-container">
    <UserList
      users={users}
      onEdit={setSelectedUser}
      onDelete={handleDeleteUser}
    />
  </div>
</div>

  );
};

export default App;