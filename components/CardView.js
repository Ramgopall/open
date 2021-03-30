import React from 'react';
import { Card } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import { scaleSize } from 'helper/normalize';

const styles = StyleSheet.create({
    cardRoot: {
        backgroundColor: 'white',
        borderRadius: scaleSize(8),
    },
});

const CardView = ({ customeSyle, children, onClick = null }) => {
    return (
        <Card style={[styles.cardRoot, customeSyle]} onPress={onClick}>
            {children}
        </Card>
    );
};


function areEqual(prevProps, nextProps) {
    return prevProps === nextProps
}

export default React.memo(CardView, areEqual);
