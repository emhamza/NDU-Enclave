import React from "react";

const sizeClasses = {
  txtLexendDecaRegular20: "font-lexenddeca font-normal",
  txtLexendDecaRegular16WhiteA700: "font-lexenddeca font-normal",
  txtDMSerifDisplayRegular40: "font-dmserifdisplay font-normal",
  txtDMSerifDisplayRegular32: "font-dmserifdisplay font-normal",
  txtLexendDecaLight24: "font-lexenddeca font-light",
  txtLexendDecaSemiBold32: "font-lexenddeca font-semibold",
  txtLexendDecaRegular16: "font-lexenddeca font-normal",
  txtLexendDecaLight16: "font-lexenddeca font-light",
  txtLexendDecaExtraLight20: "font-lexenddeca font-thin",
  txtDMSerifDisplayRegular48: "font-dmserifdisplay font-normal",
  txtLexendDecaRegular32: "font-lexenddeca font-normal",
  txtLexendDecaBold64: "font-bold font-lexenddeca",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
