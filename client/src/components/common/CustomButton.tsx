import React from "react";
import { Button } from "@pankod/refine-mui";

import { CustomButtonProps } from "interfaces/common";

const CustomButton = ({
  title,
  handleClick,
  backgroundColor,
  color,
  icon,
  fullWidth,
  type,
}: CustomButtonProps) => {
  return (
    <Button
      type={type === "submit" ? "submit" : "button"}
      sx={{
        flex: fullWidth ? 1 : "unset",
        padding: "10px 15px",
        width: fullWidth ? "100%" : "fit-content",
        minWidth: 130,
        backgroundColor,
        color,
        fontSize: 16,
        fontWeight: 600,
        gap: "1px",
        textTransform: "capitaize",
        "&:hover": {
          opacity: 0.9,
          backgroundColor,
        },
      }}
      onClick={handleClick}
    >
      {icon}
      {title}
    </Button>
  );
};

export default CustomButton;
