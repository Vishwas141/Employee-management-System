import React, { useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: ""
    });
    

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(employee);
       

        try {
            const response = await EmployeeService.createEmployee(employee);
            console.log(response);
            navigate("/");
            
        } catch (error) {
            console.log(error);
        }

        // Reset the form after submission
        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            emailId: ""
        });
    };

    const handleClear = () => {
        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            emailId: ""
        });
    };

    return (
        <div className="flex max-w-2xl shadow-lg mx-auto mt-10 border rounded-lg bg-white">
            <div className="px-8 py-8 w-full">
                <h1 className="font-semibold text-3xl text-gray-700 mb-6 text-center">Add New Employee</h1>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-600 font-medium mb-2">First Name</label>
                        <input
                            type="text"
                            name="firstName"  // Fixed: Added name attribute
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter first name"
                            value={employee.firstName}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium mb-2">Last Name</label>
                        <input
                            type="text"
                            name="lastName"  // Fixed: Added name attribute
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter last name"
                            value={employee.lastName}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            name="emailId"  // Fixed: Added name attribute
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter email address"
                            value={employee.emailId}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex justify-between mt-6">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            className="bg-gray-400 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-500 transition duration-300"
                            onClick={handleClear}
                        >
                            Clear
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEmployee;
