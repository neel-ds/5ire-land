import React from "react";
import { FormLabel, Input as ChakraInput } from "@chakra-ui/react";

interface InputProps {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange: (e: any) => void;
}

const Input = ({
  id,
  name,
  label,
  placeholder,
  type,
  value,
  onChange,
}: InputProps) => {
  return (
    <div>
      <FormLabel htmlFor={id} className="text-gray-700 dark:text-white">
        {label}
      </FormLabel>
      <ChakraInput
        id={id}
        name={name}
        onChange={onChange}
        variant="outline"
        className="mt-0 text-gray-800 shadow-sm placeholder:text-gray-500 dark:text-white"
        borderColor={"gray.500"}
        _hover={{
          borderColor: "gray.700"
        }}
        focusBorderColor="#00bdff"
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </div>
  );
};

export default Input;

Input.defaultProps = {
  label: "",
  placeholder: "",
  type: "text",
  onchange: () => {},
};
