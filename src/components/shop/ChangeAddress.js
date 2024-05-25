import React from "react";

const ChangeAddress = ({
  country,
  county,
  zipCode,
  streetAddress,
  city,
  onClick,
}) => {
  return (
    <div className='flex justify-between mb-12'>
      <p className='text-sm'>
        Ships to:{" "}
        <span>
          {streetAddress}, {city} {county} {zipCode}, {country}
        </span>
      </p>
      <button className='underline' onClick={onClick}>
        Change
      </button>
    </div>
  );
};

export default ChangeAddress;
