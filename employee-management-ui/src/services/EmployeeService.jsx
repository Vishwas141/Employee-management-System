import axios from 'axios';
import React from 'react';
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";


class EmployeeService
{
    
    createEmployee(employee)
    {
        return fetch(EMPLOYEE_API_BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employee)
        });
    }

    getEmployees()
    {
       return axios.get(EMPLOYEE_API_BASE_URL);   
    }


    updateEmployee(employeeId, employee) {
        return axios.put(`${EMPLOYEE_API_BASE_URL}/${employeeId}`, employee);
    }

    getEmployeeById(employeeId) {
        return axios.get(`${EMPLOYEE_API_BASE_URL}/${employeeId}`);
    }
    



}

export default new EmployeeService();