import mockData from './mockData.json';

export const fetchBranchesApi = async () => {
  return mockData.branches;
};

export const fetchDepartmentsApi = async (branchId) => {
    return mockData.departments.filter(department => department.branchId === branchId);
  };

export const fetchEventsApi = async (departmentId) => {
  return mockData.events.filter(event => event.departmentId === departmentId);
};
