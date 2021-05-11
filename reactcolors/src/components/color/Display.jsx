import React from 'react';
import PropTypes from 'prop-types';

const Display = ({bgColor}) => (
    <div style={{background: bgColor}}> TestyDisplay </div>
);

Display.propTypes = {
    bgColor: PropTypes.string.isRequired,
  };

export default Display;