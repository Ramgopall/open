import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';

import palette from 'themes/palette';
import { scaleSize, SCREEN_WIDTH } from 'helper/normalize';

const styles = StyleSheet.create({
    textAreaContainer: {
        width: SCREEN_WIDTH,
        height: scaleSize(150),
        borderColor: palette.grey.main,
        borderWidth: scaleSize(1),
        borderRadius: scaleSize(4),
        padding: scaleSize(4),
    },
    editText: {
        width: (SCREEN_WIDTH - scaleSize(16)),
        maxHeight: scaleSize(150),
    },
});

const TextArea = ({ customeSyle, placeholder, text, textChange }) => {
    return (
    <View style={[styles.textAreaContainer,customeSyle]} >
        <TextInput
            underlineColorAndroid="transparent"
            multiline={true}
            style={styles.editText} 
            placeholder={placeholder}
            value={text}
            onChangeText={text => textChange(text)}
        />
    </View>
    );
};


function areEqual(prevProps, nextProps) {
    return prevProps === nextProps
}

export default React.memo(TextArea, areEqual);
