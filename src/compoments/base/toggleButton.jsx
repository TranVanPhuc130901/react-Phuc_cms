import React, { useState, useEffect } from 'react';

function ToggleButton({ name, idInput, onToggle  }) {
  const [isChecked, setIsChecked] = useState(0);

//   const handleChange = () => {
//     setIsChecked((prev) => (prev === 0 ? 1 : 0));
//     onToggle && onToggle(idInput, !isChecked);
//   };
// const handleChange = () => {
//     setIsChecked((prev) => {
//       const newCheckedState = prev === 0 ? 1 : 0;
//       onToggle && onToggle(newCheckedState);
//       return newCheckedState;
//     });
//   };
const handleChange = () => {
    const newCheckedState = isChecked === 0 ? 1 : 0;
    setIsChecked(newCheckedState);
    onToggle && onToggle(newCheckedState);
  };
  

  return (
    <div className="flex flex-col gap-3 w-[calc((100%-20px)/3)]">
      <label className="font-bold text-xl">{name}</label>
      <div className="w-full">
        <label className="switch switch-primary">
          <input
            type="checkbox"
            name=""
            value={isChecked}
            id={idInput}
            className="hidden"
            checked={isChecked === 0}
            onChange={handleChange}
          />
          <span className="toggle-label bg-blue-500 text-white px-4 py-2 rounded-full transition-all duration-300 ease-in-out cursor-pointer">
            {isChecked === 1 ? 'Bật' : 'Tắt'}
          </span>
        </label>
      </div>
    </div>
  );
}

export default ToggleButton;
