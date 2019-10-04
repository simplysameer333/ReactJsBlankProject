package com.employee.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employee.model.Employee;

@RequestMapping("/api/employee")
@RestController
@CrossOrigin
public class EmployeeController {
	
	@GetMapping("/all")
	public List<com.employee.model.Employee> getAll() {
		List<Employee> emplList = new ArrayList<>();
		
		Employee e1 = new Employee();
		e1.setId("1");
		e1.setFirstName("Sameer");
		e1.setLastName("Hameed");
		e1.setCity("Delhi");		
		
		Employee e2 = new Employee();
		e2.setId("2");
		e2.setFirstName("ABC");
		e2.setLastName("DEF");
		e2.setCity("XXX");
		
		emplList.add(e1);
		emplList.add(e2);
		return emplList;
	}	
	

}
