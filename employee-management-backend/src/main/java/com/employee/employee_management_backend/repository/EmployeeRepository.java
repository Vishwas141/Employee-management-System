package com.employee.employee_management_backend.repository;

import com.employee.employee_management_backend.entity.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface EmployeeRepository extends JpaRepository<EmployeeEntity,Long> {

}
