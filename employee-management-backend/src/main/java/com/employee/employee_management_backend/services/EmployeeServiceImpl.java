package com.employee.employee_management_backend.services;

import com.employee.employee_management_backend.entity.EmployeeEntity;
import com.employee.employee_management_backend.model.Employee;
import com.employee.employee_management_backend.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements  EmployeeService{

    private final EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee createEmployee(Employee employee) {
        System.out.println(employee);
        EmployeeEntity employeeEntity=new EmployeeEntity();
        BeanUtils.copyProperties(employee,employeeEntity);
        employeeRepository.save(employeeEntity);
        return employee;
    }

    @Override
    public List<Employee> getAllEmployees()
    {
         List<EmployeeEntity> employeeEntities = employeeRepository.findAll();
         List<Employee> employees =employeeEntities.stream().map(emp->new Employee(emp.getId(),emp.getFirstName(),emp.getFirstName(),emp.getEmailId())).collect(Collectors.toList());
         return employees;
    }

    @Override
    public Employee getEmployeeById(Long id) {
        Optional<EmployeeEntity> employeeEntityOptional = employeeRepository.findById(id);

        if (employeeEntityOptional.isPresent()) {
            EmployeeEntity employeeEntity = employeeEntityOptional.get();
            Employee employee = new Employee(
                    employeeEntity.getId(),
                    employeeEntity.getFirstName(),
                    employeeEntity.getLastName(),
                    employeeEntity.getEmailId()
            );

            return employee;
        } else {
             return null;
        }
    }

    @Override
    public Employee updateEmployee(Long id, Employee updatedEmployee) {
        Optional<EmployeeEntity> employeeEntityOptional = employeeRepository.findById(id);

        if (employeeEntityOptional.isPresent()) {
            EmployeeEntity employeeEntity = employeeEntityOptional.get();

            employeeEntity.setFirstName(updatedEmployee.getFirstName());
            employeeEntity.setLastName(updatedEmployee.getLastName());
            employeeEntity.setEmailId(updatedEmployee.getEmailId());

            EmployeeEntity savedEntity = employeeRepository.save(employeeEntity);

            return new Employee(
                    savedEntity.getId(),
                    savedEntity.getFirstName(),
                    savedEntity.getLastName(),
                    savedEntity.getEmailId()
            );
        } else {
            return null;
        }
    }


}
