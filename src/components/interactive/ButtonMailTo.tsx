import React from "react";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <button
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </button>
    );
};

export default ButtonMailto;