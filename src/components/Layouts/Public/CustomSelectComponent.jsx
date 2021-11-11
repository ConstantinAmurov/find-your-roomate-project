import React from "react";
import Select from "react-select";

const customStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: "white",
    border: "2px solid #2563EB !important",
    padding: "2px",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled ? "red" : "white",
      color: "black",
      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
};

const CustomSelectComponent = ({
  label,
  options,
  field,
  form,
  isMulti = false,
}) => {
  const onChange = (option) => {
    form.setFieldValue(
      field.name,
      isMulti ? option.map((item) => item.value) : option.value
    );
  };

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter((option) => field.value.indexOf(option.value) >= 0)
        : options.find((option) => option.value === field.value);
    } else {
      return "";
    }
  };

  return (
    <div className="mb-3">
      <label className="text-white text-lg">{label}</label>
      <Select
        options={options}
        name={field.name}
        value={getValue()}
        onChange={(option) => onChange(option)}
        onBlur={field.handleBlur}
        styles={customStyles}
        isMulti={isMulti}
      ></Select>
    </div>
  );
};

export default CustomSelectComponent;
