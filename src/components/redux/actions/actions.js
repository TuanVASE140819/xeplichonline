export const fetchBranches = () => ({ type: 'FETCH_BRANCHES' });
export const fetchDepartments = () => ({ type: 'FETCH_DEPARTMENTS' });
export const fetchEvents = (departmentId) => ({ type: 'FETCH_EVENTS', departmentId });
