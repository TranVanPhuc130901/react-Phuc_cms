import { useState } from "react";

const DropDownList = ({ options, onSelectChange  }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);

    onSelectChange(value);
  };

  return (
    <div>
      <div className="p-4 bg-gray-200">
        <div className="flex items-center justify-center">
          <select onChange={handleSelectChange} value={selectedValue}>
            <option value="">Select</option>
            {options.map((category) => (
              <option
                key={category.igId}
                value={category.igId}
              >
                {category.vgName}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* You can use the selectedValue state wherever you need it */}
      
    </div>
  );
}

export default DropDownList;
