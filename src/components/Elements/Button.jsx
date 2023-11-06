import React from "react";

const Button = ({
  variant = "px-6 text-md rounded-md border-[1.5px] border-button text-button font-reguler font-poppins hover:bg-border hover:text-white transition-all duration-10 hover:shadow-lg hover:scale-110",
  children,
  kue,
}) => {
  return (
    <div>
      <a href={`https://wa.me/6281916052809?text=Halo,saya mau membeli ${kue}`} target="_blank">
        <button className={variant}>{children}</button>
      </a>
    </div>
  );
};

export default Button;
