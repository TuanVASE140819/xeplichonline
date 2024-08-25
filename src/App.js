import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BranchDropdown from './components/BranchDropdown';
import DepartmentDropdown from './components/DepartmentDropdown';
import CustomCalendar from './components/Calendar';
import { fetchBranches, fetchDepartments, fetchEvents } from '../src/components/redux/actions/actions';

const App = () => {
  const dispatch = useDispatch();
  const { branches, departments, events } = useSelector(state => state);

  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  useEffect(() => {
    dispatch(fetchBranches());
  }, [dispatch]);

  useEffect(() => {
    if (selectedBranch) {
      dispatch(fetchDepartments(selectedBranch));
    }
  }, [dispatch, selectedBranch]);

  useEffect(() => {
    if (selectedDepartment) {
      dispatch(fetchEvents(selectedDepartment));
    }
  }, [dispatch, selectedDepartment]);

  const handleBranchChange = (branchId) => {
    setSelectedBranch(branchId);
    setSelectedDepartment(null); // Clear the department when the branch changes
  };

  const handleDepartmentChange = (departmentId) => {
    setSelectedDepartment(departmentId);
  };

  // Convert string dates to Date objects
  const eventsWithDates = events.map(event => ({
    ...event,
    start: new Date(event.start),
    end: new Date(event.end)
  }));

  return (
    <div className="container mx-auto p-4">
      <BranchDropdown 
        branches={branches} 
        selectedBranch={selectedBranch} 
        onSelectBranch={handleBranchChange} 
      />
      <DepartmentDropdown 
        departments={departments} 
        selectedDepartment={selectedDepartment} 
        onSelectDepartment={handleDepartmentChange} 
      />
      <CustomCalendar events={eventsWithDates} />
    </div>
  );
};

export default App;
