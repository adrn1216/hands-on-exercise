import React from "react";

const Problem = () => {
  return (
    <>
      <h1>
        2. Create a React functional-based component that satisfies the
        following:
      </h1>
      <ul>
        <li>
          A variable state holding the data structure of the given product table
        </li>
        <li>Methods that you can use to create the logic</li>
        <li>
          Returns the output below (Use H1 for the Title and Paragraph for the
          values
        </li>
      </ul>
      <h4>Notes:</h4>
      <h4>Add comments for each segments in the component</h4>
      <section className="comments-notes">
        <code>{`// Variables`}</code>
        <code>{`// Methods`}</code>
        <code>{`// Return `}</code>
      </section>
      <h4>Price format should be formatted like this:</h4>
      <ul>
        <li>700K for 700,000</li>
        <li>1.1M for 1,114,000</li>
      </ul>
    </>
  );
};

export default Problem;
