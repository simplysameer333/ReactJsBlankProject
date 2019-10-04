import React, { useState } from "react";
import {textInput} from './../components/shared/textInput';

export function InputEmployee(props) {
    const { value:firstName, bind:bindFirstName, reset:resetFirstName } = textInput('');
    const { value:lastName, bind:bindLastName, reset:resetLastName } = textInput('');
    const { value:city, bind:bindCity, reset:resetCity } = textInput('');
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${firstName} ${lastName} ${city}`);
      //  resetFirstName();
      // resetLastName();
      // resetCity();
      var newEmployees = {firstName : `${firstName}`, lastName : `${lastName}`, city : `${city}` };
        (async () => {
            const response = await fetch('http://localhost:9090/api/employee/add', {
                method: "POST",      
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newEmployees)
            });
            const body = await response.json();
            console.log(body);
            if (body.error) {
                console.log(body.status);
            }
        })();		
    }
    return (
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" {...bindFirstName} />
        </label>
        <label>
          Last Name:
          <input type="text" {...bindLastName} />
        </label>
        <label>
          City:
          <input type="text" {...bindCity} />
        </label>
        <br/>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
