import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const DropDownList = ({ options, onSelectChange  }) => {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);

    onSelectChange(value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          id="standard-select-currency-native"
          select
          label="Native select"
          defaultValue="a"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="standard"
        >
          <option value="0">
              Mời chọn danh mục
            </option>
          {options.map((option) => (
            <option key={option.igId} value={option.igId}>
              {option.vgName}
            </option>
          ))}
        </TextField>
     </div>
    </Box>
  );
}

export default DropDownList;
