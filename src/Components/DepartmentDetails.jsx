import React from "react";
import { useLocation } from "react-router-dom";
import Table from 'react-bootstrap/Table';

export const DepartmentDetails = () => {

    const location = useLocation();
    
    const department = location.state.department;
    console.log("Department within deparment details" + department);

    return(
        <>  
           <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Department ID</th>
                        <th>Department Name</th>
                        <th>Department Code</th>
                        <th>Department Address</th>
                    </tr>
                    <tr>
                        <td>{department.departmentId}</td>
                        <td>{department.departmentName}</td>
                        <td>{department.departmentCode}</td>
                        <td>{department.departmentAddress}</td>
                    </tr>
                </thead>
            </Table>
        </>
    )
}