import React from 'react';
import { Image } from 'react-native';

const logo = require('assets/images/school_logo.png');

const SchoolLogo = ({ customeSyle }) => {
    return (
        <Image style={customeSyle} source={logo} />
    );
};


function areEqual(prevProps, nextProps) {
    return prevProps === nextProps
}

export default React.memo(SchoolLogo, areEqual);
