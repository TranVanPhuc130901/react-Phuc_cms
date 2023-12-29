import { useState } from "react";

const DropDownList = ({ categories }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
  
    const handleToggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleSelectOption = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
    };
  
    return (
      <div>
        <div className="p-4 bg-gray-200">
          <div className="flex items-center justify-center">
            <div className="dropdown relative">
              <div
                className="px-4 py-2 bg-white border border-gray-300 rounded cursor-pointer"
                onClick={handleToggleDropdown}
              >
                {selectedOption || 'Select an option'}
              </div>
              {isOpen && (
                <ul className="absolute top-full left-0 bg-white border border-gray-300 rounded shadow">
                {categories.map((category) => (
                  <li
                    key={category}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSelectOption(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}

export default DropDownList;