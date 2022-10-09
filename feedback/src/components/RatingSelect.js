import React, { useState } from "react";

export const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(10);

  const handleChange = (e) => {
    console.log(e.currentTarget.value);
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  return (
    <ul>
      <li>
        <input
          type="radio"
          id="num1"
          name="rating"
          value="10"
          onChange={handleChange}
          checked={selected === 10}
        />
        <label htmlFor="num1">10</label>
      </li>
      <li>
        <input
          type="radio"
          id="num2"
          name="rating"
          value="8"
          onChange={handleChange}
          checked={selected === 8}
        />
        <label htmlFor="num2">8</label>
      </li>
      <li>
        <input
          type="radio"
          id="num3"
          name="rating"
          value="7"
          onChange={handleChange}
          checked={selected === 7}
        />
        <label htmlFor="num3">7</label>
      </li>
    </ul>
  );
};
