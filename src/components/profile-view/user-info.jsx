import React from "react";
import PropTypes from "prop-types";

export const UserInfo = ({email, username}) => {
    return (
        <div>
            <p>Username: {user.username} </p>
            <p>Email: {user.email} </p>
        </div>
    );
};

UserInfo.PropTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};