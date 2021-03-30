import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

import { scaleSize } from 'helper/normalize';
import TextView from 'components/TextView';
import { l } from 'helper/constants';
import palette from 'themes/palette';

const bgImage = require('assets/images/common_header.png');
const backIcon = require('assets/images/back_icon.png');

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    headerImage: {
        width:'100%',
        height: scaleSize(100),
    },
    menuIcon: {
        marginTop: scaleSize(50),
        marginStart: scaleSize(12),
        width: scaleSize(18),
        height: scaleSize(18),
    },
    title: {
        marginTop: scaleSize(47),
        fontSize: l,
        color: palette.white.main,
    },
});

const HeaderContainer = ({ navigation, children, title }) => {
    return (
        <View style={styles.container}>
            <View style = {styles.backgroundContainer}>
                <Image source = {bgImage} resizeMode = 'stretch' style = {styles.headerImage} />
            </View>
            <View style={styles.backgroundContainer}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <FastImage source = {backIcon} resizeMode = 'contain' style = {styles.menuIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.backgroundContainer}>
                <View style={{width:'100%', alignItems:'center'}}>
                    <TextView customeSyle={styles.title} text={title} />
                </View>
            </View>
            <View style={{marginTop: scaleSize(100)}}>
                {children}    
            </View>
        </View>
    );
};


function areEqual(prevProps, nextProps) {
    return prevProps === nextProps
}

export default React.memo(HeaderContainer, areEqual);
