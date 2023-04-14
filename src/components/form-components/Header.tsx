import React from "react";

interface HeaderProps {
  heading: string;
}

const Header = ({ heading }: HeaderProps) => {
  return (
    <div className="flex flex-col text-center w-full">
      <h1 className="text-3xl mb-10 font-bold title-font mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#008dff] dark:to-[#00bdff]">
        {heading}
      </h1>
    </div>
  );
};

export default Header;

Header.defaultProps = {
  label: "",
  onClick: () => {},
};
