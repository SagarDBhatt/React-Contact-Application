import React, {useState, createContext} from "react";

export const departmentContext = createContext();

export const DepartmentContextProvider = ({children}) => {
    const [department, setDepartment] = useState([]);

    return(
        <departmentContext.Provider value={{department, setDepartment}}>
            {children}
        </departmentContext.Provider>
    )
}