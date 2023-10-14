// c1.js
import React, { useState } from 'react';
import './style.css';
const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const birthdateArray = birthdate.split('-');
    const birthYear = parseInt(birthdateArray[0]);
    const birthMonth = parseInt(birthdateArray[1]);
    const birthDay = parseInt(birthdateArray[2]);

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // Month is 0-indexed
    const currentDay = today.getDate();

    let calculatedAge = currentYear - birthYear;

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  };

  return (
    <div>
      <h2>Age Calculator</h2>
      <p>Enter your date of birth</p>
      <label htmlFor="birthdate"></label>
      <input class="C1"
        type="date"
        id="birthdate"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <br />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== '' && <p>Your age is: {age} years</p>}
    </div>
  );
};

export default AgeCalculator;
