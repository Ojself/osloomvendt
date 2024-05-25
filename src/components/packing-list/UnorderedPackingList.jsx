'use client';
import React, { useEffect, useState } from 'react';
import { FiCheckCircle, FiCircle } from 'react-icons/fi';

const CheckOffButton = ({ isChecked }) => {
  return (
    <div className='mx-2 mt-1 flex items-center'>
      {isChecked ? (
        <FiCheckCircle className={`text-secondary`} />
      ) : (
        <FiCircle className={`text-primary`} />
      )}
    </div>
  );
};

const UnorderedPackingList = ({
  somethingUpdated,
  items,
  title,
  iconLeft,
  iconRight,
}) => {
  const [checkedItems, setCheckedItems] = useState({});
  useEffect(() => {
    const checkedItems = items?.reduce((obj, item) => {
      const isChecked =
        localStorage.getItem(`oo-packing-list-${item}`) === 'true';
      obj[item] = isChecked;
      return obj;
    }, {});
    setCheckedItems(checkedItems);
  }, [somethingUpdated, items]);

  const handleClick = (item) => {
    const newValue = !checkedItems[item];
    localStorage.setItem(`oo-packing-list-${item}`, newValue.toString());
    setCheckedItems((prevCheckedItems) => {
      return {
        ...prevCheckedItems,
        [item]: newValue,
      };
    });
  };

  return (
    <div className='rounded-lg bg-linkGray'>
      <div className='flex flex-row justify-around rounded-t-lg bg-primary py-2'>
        {iconLeft}
        <h2 className='text-center text-lg'>{title}</h2>
        {iconRight}
      </div>
      <ul className=''>
        {items.map((item) => {
          return (
            <button
              key={item}
              className='flex w-full flex-row py-3 hover:text-secondary'
              onClick={() => handleClick(item)}
            >
              <li className='flex h-full flex-row '>
                <CheckOffButton isChecked={checkedItems[item]} />
                {item}
              </li>
            </button>
          );
        })}
      </ul>
    </div>
  );
};

export default UnorderedPackingList;
