import React from "react";

const UserList = ({ users, onEdit, onDelete }) => (
  <table className="table-auto w-full text-sm text-gray-700">
  <thead className="bg-gray-100">
    <tr>
      <th className="py-2 px-4">ID</th>
      <th className="py-2 px-4">First Name</th>
      <th className="py-2 px-4">Last Name</th>
      <th className="py-2 px-4">Email</th>
      <th className="py-2 px-4">Department</th>
      <th className="py-2 px-4">Actions</th>
    </tr>
  </thead>
  <tbody>
    {users.map(user => (
      <tr key={user.id} className="hover:bg-gray-50">
        <td className="py-2 px-4">{user.id}</td>
        <td className="py-2 px-4">{user.firstName}</td>
        <td className="py-2 px-4">{user.lastName}</td>
        <td className="py-2 px-4">{user.email}</td>
        <td className="py-2 px-4">{user.department}</td>
        <td className="py-2 px-4">
          <button onClick={() => onEdit(user)} className="bg-yellow-500 text-white p-2 rounded mr-2">
            Edit
          </button>
          <button onClick={() => onDelete(user.id)} className="bg-red-500 text-white p-2 rounded">
            Delete
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

);

export default UserList;