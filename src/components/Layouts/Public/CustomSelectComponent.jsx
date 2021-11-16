import React from "react";
import Select from "react-select";

const customStyles = (isError) => ({
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    border: isError
      ? "2px solid #f43f5e  !important"
      : "2px solid #2563EB !important",
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
});

const CustomSelectComponent = ({
  label,
  options,
  field,
  form,
  isMulti = false,
  touched,
  error,
}) => {
  const onChange = (option) => {
    form.setFieldValue(
      field.name,
      isMulti ? option.map((item) => item.value) : option.value
    );
  };
  const onBlur = () => {
    form.setFieldTouched(field.name);
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
        onBlur={onBlur}
        styles={customStyles(error && touched)}
        isMulti={isMulti}
      ></Select>
      {error && touched && (
        <div className="text-red-500 text-sm mt-1">{error}</div>
      )}
    </div>
  );
};

export default CustomSelectComponent;
