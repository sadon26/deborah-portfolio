import classNames from "classnames";
import React from "react";

const Button = ({ children, className, ...rest }) => {
  return (
    <button
      className={classNames([
        "bg-button-trans rounded-[100px] h-[40px] px-8 text-white hover:scale-[1.04] transition-all active:scale-[1]",
        className,
      ])}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
