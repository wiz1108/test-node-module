import React from 'react';
import Icon from '../Icon/Icon.jsx';

const Button = ({ type, icon, iconClass, children, ...props }) => {
    return <button type={type} {...props}>
            {icon ? <Icon type={icon} className={iconClass} /> : null}
            {children}
        </button >;
};

export default Button;
