import React from 'react';
import { Text } from 'react-native';

const TextView = ({ customeSyle, text, numberOfLines }) => {
    return (
        <Text style={customeSyle} numberOfLines={numberOfLines? numberOfLines : null}>
            {text}
        </Text>
    );
};


function areEqual(prevProps, nextProps) {
    return prevProps === nextProps
}

export default React.memo(TextView, areEqual);
