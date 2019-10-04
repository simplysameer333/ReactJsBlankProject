import React from 'react';
import ReactDOM from 'react-dom';
import fetch from "isomorphic-fetch";

export class EmployeesInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {employees: [], isLoading: true};
	}

	componentDidMount() {
		(async () => {
			const response = await fetch('http://localhost:9090/api/employee/all');
			const body = await response.json();
			this.setState({ employees: body, isLoading: false });
		})();		
	}

	render() {
		const {employees, isLoading} = this.state;

		if (isLoading) {
			return <p>Loading...</p>;
		}

	
		var newEmployees = employees.map(employee =>				
			<tr key = {employee.id}>
				<td>
					{employee.id}
				</td>
				<td>
					{employee.firstName}
				</td>
				<td>
					{employee.lastName}
				</td>
				<td>
					{employee.city}
				</td>					  
			</tr>				  			
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>City</th>
					</tr>
					{newEmployees}
				</tbody>
			</table>
		)
	}
}

//https://github.com/spring-guides/tut-react-and-spring-data-rest/blob/master/basic/src/main/js/client.js
//https://reactjs.org/docs/faq-ajax.html
//https://developer.okta.com/blog/2018/07/19/simple-crud-react-and-spring-boot
//http://sagan-production.cfapps.io/guides/tutorials/react-and-spring-data-rest/
