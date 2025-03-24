import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate(); // ✅ Use navigate function

    return (
        <nav className="bg-gray-900 shadow-md">
            <div className="h-16 px-8 flex justify-between items-center">
                <h1 className="text-white text-lg font-semibold">
                    Employee Management System
                </h1>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    onClick={() => navigate("/add")}
                >
                    ADD EMPLOYEE
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
