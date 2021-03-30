import { StyleSheet } from 'react-native';

import { scaleSize, SCREEN_WIDTH } from 'helper/normalize';
import palette from 'themes/palette';
import { m, sm, xs } from 'helper/constants';

const imageWidth = SCREEN_WIDTH * 0.20;
const wrapperWidth = SCREEN_WIDTH - imageWidth - scaleSize(16);
const titleWidth = wrapperWidth * 0.72;
const titleWidthWithoutImage = SCREEN_WIDTH * 0.77;

const styles = StyleSheet.create({
    row: {
        marginTop: scaleSize(24),
        flexDirection: 'row',
        width: SCREEN_WIDTH,
    },
    image: {
        marginStart: scaleSize(8),
        height: imageWidth,
        width: imageWidth,
        borderRadius: scaleSize(4),
    },
    wrapper: {
        marginStart: scaleSize(8),
        width: wrapperWidth,
    },
    wrapperWithoutImage: {
        marginStart: scaleSize(8),
        width: SCREEN_WIDTH,
    },
    titleWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        color: palette.primary.main,
        fontSize: m,
        width: titleWidth,
    },
    titleWithoutImage: {
        color: palette.primary.main,
        fontSize: m,
        width: titleWidthWithoutImage,
    },
    date: {
        color: palette.grey.main,
        fontSize: xs,
    },
    desc: {
        marginTop: scaleSize(8),
        color: palette.grey.main,
        fontSize: sm,
        paddingEnd: scaleSize(8)
    },
});

export default styles;