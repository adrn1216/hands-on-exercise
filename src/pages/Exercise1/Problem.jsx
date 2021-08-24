import React from "react";

const Problem = () => {
  return (
    <>
      <h1>
        1. Create a function/s that accepts 1 Parameter ( Person Object) and
        will print the following string. Use ES6 Syntax.
      </h1>
      <h4>Example:</h4>
      <code>
        {`const person = { 
            firstname: ‘Juan’, 
            lastname: ‘Dela Cruz’, 
            birthday: ’01/01/2000’
        }`}
      </code>
      <h4>Output:</h4>
      <p>Initials: JD, Age: 21 Adult</p>
      <h4>Format:</h4>
      <p>{`Initials: {initials}, Age: {age} {ageCategory}`}</p>
      <h4>Age Category Mapping:</h4>
      <p>0 - 12 = Young 13 - 19 = Teen 20 - 59 = Adult 60 and about = Senior</p>
    </>
  );
};

export default Problem;
