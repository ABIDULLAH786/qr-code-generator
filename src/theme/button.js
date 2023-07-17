import React from "react";
import { Button_Style } from "../constants/Index";

export default function Button({
    title,
    className,
    type,
    color,
    onClick,
    Icon,
    iconClass,
    aria_label,
    disabled,
    children,
}) {

    return (
        <button
            type={type}
            onClick={onClick}
            className={` ${className} ${Button_Style} ${Icon ? "flex justify-between items-center" : ""
                }`}
            aria-label={aria_label}
            title={title}
            disabled={disabled}
        >
            {children ? children : title}
            {Icon && <Icon className={iconClass} />}
        </button>
    );
}
