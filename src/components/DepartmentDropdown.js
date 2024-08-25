// src/components/DepartmentDropdown.js
import React from 'react';

const DepartmentDropdown = ({ departments, selectedDepartment, onSelectDepartment }) => {
  return (
    <select
      value={selectedDepartment || ''}
      onChange={(e) => onSelectDepartment(e.target.value)}
      className="border p-2 rounded"
    >
      <option value="" disabled>Chọn Bộ Phận</option>
      {departments.map(department => (
        <option key={department.id} value={department.id}>
          {department.name}
        </option>
      ))}
    </select>
  );
};

export default DepartmentDropdown;
