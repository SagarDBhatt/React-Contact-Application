import React, { useContext, useEffect, useState } from "react";
import { departmentContext } from "../context/DepartmentContext";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";

export default function Departments() {
    const { department, setDepartment } = useContext(departmentContext);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const BASE_URL = `http://localhost:8080/department/v1/`;

    const navigate = useNavigate();

    useEffect(() => {
        const getDepartments = async () => {
            const response = await fetch(BASE_URL + "findAll");
            if (!response.ok) {
                setIsError(true);
            }
            const data = await response.json();
            setDepartment(data);
            console.log("Departments fetched from API = " + JSON.stringify(data));

            setIsLoading(false);
        }

        getDepartments();
    }, []);

    if (isError) {
        return (<>Error...</>)
    }

    if (isLoading) {
        return (<>Loading...</>)
    }

    const goToDepartmentDetails = (department) => {
        navigate(`/departments/${department.departmentId}`, {state: {department: department}});
    }

    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Department ID</th>
                        <th>Department Name</th>
                        <th>Department Code</th>
                        <th>Department Address</th>
                    </tr>
                    {department.map((department, id) => {
                        return (
                            <tr key={id} onClick={() => goToDepartmentDetails(department)}>
                                <td>{department.departmentId}</td>
                                <td>{department.departmentName}</td>
                                <td>{department.departmentCode}</td>
                                <td>{department.departmentAddress}</td>
                            </tr>
                        )
                    })}
                </thead>

            </Table>
            {/* {department.map( (department,id) => {
                return(
                    <>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                </tr>
                            </thead>
                        </Table>
                    </>
                )
            })} */}
        </>
    );
}