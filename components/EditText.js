import React from 'react';
import { TextInput  } from 'react-native-paper';
import { StyleSheet, Image } from 'react-native';

import palette from 'themes/palette';
import { scaleSize } from 'helper/normalize';
import { m } from 'helper/constants';

const styles = StyleSheet.create({
    editRoot: {
        width: '100%',
        fontSize: m
    },
});

const EditText = ({ customeSyle, placeholder, text, textChange, isPassword, iconName }) => {
    return (
        <TextInput
            mode='outlined'
            dense={true}
            right={iconName?
            <TextInput.Icon name={()=><Image source={iconName} resizeMode='contain' style={{ height:scaleSize(16), width:scaleSize(16) }} />} />
            : null}
            theme={{ colors: { text: 'black', primary: palette.secondary.main,}, roundness: scaleSize(6)}}
            style={[styles.editRoot,customeSyle]} 
            placeholder={placeholder}
            value={text}
            secureTextEntry={isPassword}
            onChangeText={text => textChange(text)}
        />
    );
};


function areEqual(prevProps, nextProps) {
    return prevProps === nextProps
}

export default React.memo(EditText, areEqual);
