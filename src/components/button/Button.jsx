import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Button.propTypes = {
    title : PropTypes.string,
};

function Button(props) {
    const {title , path} = props;
    return (
        <Link to={path} className="tf-button ">{title}</Link>
    );
}

export default Button;