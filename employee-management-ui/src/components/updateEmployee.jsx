import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const UpdateEmployee = () => {
    const { id } = useParams(); // Get employee ID from URL
    const navigate = useNavigate(); // For navigation

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        emailId: "",
    });

    useEffect(() => {
        fetchEmployeeDetails();
    }, []);

    const fetchEmployeeDetails = async () => {
        try {
            const response = await EmployeeService.getEmployeeById(id);
            setEmployee(response.data);
        } catch (error) {
            console.error("Error fetching employee details", error);
        }
    };

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const updateEmployee = async (e) => {
        e.preventDefault();
        try {
            await EmployeeService.updateEmployee(id, employee);
            alert("Employee updated successfully!");
            navigate("/");
        } catch (error) {
            console.error("Error updating employee", error);
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
                Update Employee
            </h2>
            <form onSubmit={updateEmployee}>
                <div className="mb-4">
                    <label className="block text-gray-600 mb-2">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={employee.firstName}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-600 mb-2">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={employee.lastName}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-600 mb-2">Email</label>
                    <input
                        type="email"
                        name="emailId"
                        value={employee.emailId}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Update
                    </button>
                    <button
                        type="button"
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                        onClick={() => navigate("/")}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateEmployee;
