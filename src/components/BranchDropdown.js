import React from 'react';

const BranchDropdown = ({ branches, selectedBranch, onSelectBranch }) => {
  return (
    <select
      value={selectedBranch}
      onChange={(e) => onSelectBranch(e.target.value)}
      className="border p-2 rounded"
    >
      {branches.map(branch => (
        <option key={branch.id} value={branch.id}>{branch.name}</option>
      ))}
    </select>
  );
};

export default BranchDropdown;
