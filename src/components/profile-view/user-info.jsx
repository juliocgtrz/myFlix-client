import React from "react";
import PropTypes from "prop-types";

export const UserInfo = ({email, name}) => {
    return (
        <div>
            <p>Username: {name} </p>
            <p>Email: {email} </p>
        </div>
    );
};

UserInfo.PropTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};