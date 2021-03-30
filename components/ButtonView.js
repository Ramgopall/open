import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import palette from 'themes/palette';
import { scaleSize } from 'helper/normalize';
import { ml } from 'helper/constants';

const styles = StyleSheet.create({
    buttonRoot: {
        height: scaleSize(45),
        width: '100%',
        borderRadius: scaleSize(8),
        backgroundColor: palette.secondary.main
    },
    contentheight:{
        height: scaleSize(45),
    },
    text:{
        fontSize: ml,
    },
});

const ButtonView = ({ customeSyle, text, onClick }) => {
    return (
        <Button uppercase={false} contentStyle={styles.contentheight} labelStyle={styles.text} style={[styles.buttonRoot,customeSyle]} mode="contained" onPress={onClick}>
            {text}
        </Button>
    );
};


function areEqual(prevProps, nextProps) {
    return prevProps === nextProps
}

export default React.memo(ButtonView, areEqual);
