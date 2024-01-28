import React, { useState } from 'react';
import { AuthService } from '../services/AuthService';

function FormComponent() {
  const authService = AuthService(); // Use the AuthService context

  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
    name: '',
    weight: '',
    height: '',
    age: '',
    goal: '',
    gender: '',
    activityLevel: '',
  });

  const [formErrors, setFormErrors] = useState({});


  const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,30}$/;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isValidForm()) {
      const user = {
        username: formValues.username,
        password: formValues.password,
        name: formValues.name,
        weight: +formValues.weight,
        height: +formValues.height,
        age: +formValues.age,
        goal: formValues.goal,
        gender: formValues.gender,
        activity_level: formValues.activityLevel,
      };

      authService.login(user).then(() => {
        // Assuming your login method sets the user in the context
        alert('Udało się utworzyć konto');
        window.location.href = '/login'; // Redirect using window.location.href
      });
    } else {
      console.log('Formularz jest błędny');
    }

    // let errors = { ...formErrors };
    // if (formValues.username === 'username' && !isValidUsername(value)) {
    //     errors.username = 'Nazwa użytkownika musi zawierać ';
    // } else {
    //     errors.username = '';
    // }
  };

  const isValidForm = () => {
    // Validation logic for username field
    const isUsernameValid = /^[a-zA-Z]*$/.test(formValues.username) && formValues.username.length >= 2 && formValues.username.length <= 30;
  
    // Validation logic for password field
    const isPasswordValid = passwordPattern.test(formValues.password) && formValues.password.length >= 8 && formValues.password.length <= 30;
  
    // Validation logic for name field
    const isNameValid = /^[A-Z][a-z]*$/.test(formValues.name) && formValues.name.length >= 2 && formValues.name.length <= 20;
  
    // Validation logic for weight field
    const isWeightValid = /^[0-9]*$/.test(formValues.weight) && formValues.weight >= 2 && formValues.weight <= 600;
  
    // Validation logic for height field
    const isHeightValid = /^[0-9]*$/.test(formValues.height) && formValues.height >= 30 && formValues.height <= 350;
  
    // Validation logic for age field
    const isAgeValid = /^[0-9]*$/.test(formValues.age) && formValues.age >= 12 && formValues.age <= 130;
  
    const isGoalValid = formValues.goal !== "";
    const isGenderValid = formValues.gender !== "";
    const isActivityLevelValid = formValues.activityLevel !== "";

  
    // Return true if all fields are valid, otherwise false
    return (
      isUsernameValid &&
      isPasswordValid &&
      isNameValid &&
      isWeightValid &&
      isHeightValid &&
      isAgeValid &&
      isGoalValid &&
      isGenderValid &&
      isActivityLevelValid
    );
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleInputChange}
            placeholder="Enter username"
            required
            minLength="2"
            maxLength="30"
            pattern="[a-zA-Z]*"
          />
          {/* Add validation error message here if needed */}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
            placeholder="Enter password"
            required
            minLength="8"
            maxLength="30"
            pattern="^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,30}$"
          />
          {/* Add validation error message here if needed */}
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
            placeholder="Enter name"
            required
            minLength="2"
            maxLength="20"
            pattern="[A-Z][a-z]*"
          />
          {/* Add validation error message here if needed */}
        </div>
        <div>
          <label>Weight:</label>
          <input
            type="number"
            name="weight"
            value={formValues.weight}
            onChange={handleInputChange}
            placeholder="Enter weight"
            required
            min="2"
            max="600"
            pattern="[0-9]*"
          />
          {/* Add validation error message here if needed */}
        </div>
        <div>
          <label>Height:</label>
          <input
            type="number"
            name="height"
            value={formValues.height}
            onChange={handleInputChange}
            placeholder="Enter height"
            required
            min="30"
            max="350"
            pattern="[0-9]*"
          />
          {/* Add validation error message here if needed */}
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formValues.age}
            onChange={handleInputChange}
            placeholder="Enter age"
            required
            min="12"
            max="130"
            pattern="[0-9]*"
          />
          {/* Add validation error message here if needed */}
        </div>
        <div>
          <label>Goal:</label>
          <select
            name="goal"
            value={formValues.goal}
            onChange={handleInputChange}
            required
          >
            <option value="">Wybierz cel</option>
            <option value="schudnac">schudnac</option>
            <option value="utrzymac">utrzymac wage</option>
            <option value="przytyc">przytyc</option>
          </select>
          {/* Add validation error message here if needed */}
        </div>
        <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={formValues.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Wybierz płeć</option>
            <option value="mezczyzna">mezczyzna</option>
            <option value="kobieta">kobieta</option>
          </select>
          {/* Add validation error message here if needed */}
        </div>
        <div>
          <label>Activity Level:</label>
          <select
            name="activityLevel"
            value={formValues.activityLevel}
            onChange={handleInputChange}
            required
          >
            <option value="">Wybierz poziom aktywności</option>
            <option value="niski">niski poziom aktywności</option>
          <option value="lekki">lekki poziom aktywności - 1-3 treningi/tydzień</option>
          <option value="umiarkowany">umiarkowany poziom aktywności - 3-5 treningów/tydzień</option>
          <option value="wysoki">wysoki poziom aktywności - 6-7 treningów/tydzień</option>
          <option value="ultra">najwyższy poziom aktywności - 2 treningi/dzień lub praca fizyczna</option>
          </select>
          {/* Add validation error message here if needed */}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  
}

export default FormComponent;
