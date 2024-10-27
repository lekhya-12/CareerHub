import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [empId, setEmpId] = useState(null);
  const [userRole, setUserRole] = useState('employee'); // Initialize with a default role

  return (
    <UserContext.Provider value={{ empId, setEmpId, userRole, setUserRole }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
