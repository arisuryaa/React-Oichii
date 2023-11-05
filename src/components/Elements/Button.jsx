import React from "react";

const Button = ({
  variant = "px-6 text-md rounded-md border-[1.5px] border-button text-button font-reguler font-poppins hover:bg-border hover:text-white transition-all duration-10 hover:shadow-lg hover:scale-110",
  children,
}) => {
  return (
    <div>
      <button className={variant}>{children}</button>
    </div>
  );
};

export default Button;
