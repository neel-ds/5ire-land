import React from "react";
import { FormLabel, Select as ChakraInput } from "@chakra-ui/react";

interface OptionProps {
  name: string;
  value: string;
}

interface SelectProps {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  options?: OptionProps[];
  onChange: (e: any) => void;
}

const Select = ({
  id,
  name,
  label,
  placeholder,
  options,
  onChange,
}: SelectProps) => {
  return (
    <div>
      <FormLabel htmlFor={id} className="text-gray-700 dark:text-white">
        {label}
      </FormLabel>
      <ChakraInput
        variant="outline"
        id={id}
        name={name}
        onChange={onChange}
        className="mt-0 text-gray-700 dark:text-white"
        focusBorderColor="#008dff"
      >
        <option selected hidden disabled value="">
          {placeholder}
        </option>
        {options?.map(({ name, value }) => (
          <option
            key={value}
            className="text-gray-700 dark:text-white"
            value={value}
          >
            {name}
          </option>
        ))}
      </ChakraInput>
    </div>
  );
};

export default Select;

Select.defaultProps = {
  label: "",
  placeholder: "",
  options: [],
  onchange: () => {},
};
