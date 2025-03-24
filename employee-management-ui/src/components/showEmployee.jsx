import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const ShowEmployee = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await EmployeeService.getEmployees();
            setEmployees(response.data);
        } catch (err) {
            setError("Failed to fetch employees");
        } finally {
            setLoading(false);
        }
    };

    const updateEmployee = (id) => {
        navigate(`/update/${id}`);
    };
  
    

    return (
        <div className="max-w-4xl mx-auto mt-10">
            <h1 className="text-3xl font-semibold text-gray-700 text-center mb-6">
                Employee List
            </h1>

            {loading && <p className="text-center text-gray-500">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            {!loading && !error && employees.length === 0 && (
                <p className="text-center text-gray-600">No employees found.</p>
            )}

            {!loading && !error && employees.length > 0 && (
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 shadow-md">
                        <thead className="bg-blue-600 text-white">
                            <tr>
                                <th className="py-3 px-6 border-b">First Name</th>
                                <th className="py-3 px-6 border-b">Last Name</th>
                                <th className="py-3 px-6 border-b">Email</th>
                                <th className="py-3 px-6 border-b">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee) => (
                                <tr key={employee.id} className="hover:bg-gray-100">
                                    <td className="py-3 px-6 border-b">{employee.firstName}</td>
                                    <td className="py-3 px-6 border-b">{employee.lastName}</td>
                                    <td className="py-3 px-6 border-b">{employee.emailId}</td>
                                    <td className="py-3 px-6 border-b">
                                        <button
                                            onClick={() => updateEmployee(employee.id)}
                                            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
                                        >
                                            Update
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ShowEmployee;
