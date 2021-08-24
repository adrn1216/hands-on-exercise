import React, { useState, useEffect } from "react";

const Solution = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [{ initials, age, category }, setOutputData] = useState({
    initials: "",
    age: "",
    category: "",
  });

  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  const showOutput = firstName && lastName && dateRegex.test(birthday);

  useEffect(() => {
    showOutput && getOutput(birthday);
  }, [birthday]);

  const handleFirstNameChange = (e) => {
    const data = e.target.value;
    setFirstName(data);
  };

  const handleLastNameChange = (e) => {
    const data = e.target.value;
    setLastName(data);
  };

  const handleBirthdayChange = (e) => {
    const data = e.target.value;
    var formatData = data.replace(/[^0-9\/]/g, "");
    setBirthday(formatData);
  };

  const calculateAge = (data) => {
    var date = new Date(data);
    var diff = Date.now() - date.getTime();
    var ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const getCategory = (data) => {
    const ageCategory = {
      Young: [0, 12],
      Teen: [13, 19],
      Adult: [20, 59],
      Senior: [60],
    };

    const category = Object.keys(ageCategory).filter(function (key, index) {
      if (ageCategory[key].length === 2) {
        if (data >= ageCategory[key][0] && data <= ageCategory[key][1])
          return key;
      } else {
        if (data >= ageCategory[key][0]) return key;
      }
    })[0];

    return category;
  };

  const getOutput = () => {
    var initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    var age = calculateAge(birthday);
    var category = getCategory(age);
    setOutputData({ initials, age, category });
  };

  return (
    <>
      <h4>Solution:</h4>
      <section className="solution">
        <section className="input-section">
          <input
            type="text"
            placeholder="Enter First Name"
            value={firstName}
            onChange={handleFirstNameChange}
          ></input>
          <input
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={handleLastNameChange}
          ></input>
          <input
            type="text"
            placeholder="Enter Birhday (MM/DD/YYYY)"
            value={birthday}
            onChange={handleBirthdayChange}
          ></input>
        </section>
        <section className="object-section">
          <code>
            {`const person = { 
            firstname: ‘${firstName}‘, 
            lastname: ‘${lastName}’, 
            birthday: ’${birthday}’
        }`}
          </code>
        </section>
      </section>
      {showOutput && !isNaN(age) && (
        <p>{`Initials: ${initials}, Age: ${age} ${category}`}</p>
      )}
    </>
  );
};

export default Solution;
