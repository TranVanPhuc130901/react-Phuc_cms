import { useState } from "react";

const DropDownList = () => {
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
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSelectOption('Option 1')}
                  >
                    Option 1
                  </li>
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSelectOption('Option 2')}
                  >
                    Option 2
                  </li>
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSelectOption('Option 3')}
                  >
                    Option 3
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}

export default DropDownList;