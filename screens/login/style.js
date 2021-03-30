import { StyleSheet } from 'react-native';

import { scaleSize } from 'helper/normalize';
import palette from 'themes/palette';
import { xl, m } from 'helper/constants';

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    schoolLogoWrapper: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    schoolLogo: {
        height: scaleSize(120),
        width: scaleSize(120),
        resizeMode: 'cover',
    },
    accountTypeWrapper: {
        flex: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        height: '92%',
        width: '85%',
    },
    title: {
        marginTop: scaleSize(8),
        fontFamily: 'Roboto-Bold',
        textAlign: 'center',
        color: palette.secondary.main,
        fontSize: xl,
    },
    subTitle: {
        marginTop: scaleSize(8),
        textAlign: 'center',
        color: palette.grey.main,
        fontSize: m,
    },
    fieldTitle: {
        marginTop: scaleSize(8),
        color: palette.grey.main,
        fontSize: m,
        fontFamily: 'Roboto-Medium'
    },
    editTextWrapper: {
        width: '100%',
        marginTop: scaleSize(16),
        paddingStart: scaleSize(16),
        paddingEnd: scaleSize(16),
    },
    buttonWrapper: {
        height: '100%',
        marginTop: scaleSize(32),
        paddingStart: scaleSize(16),
        paddingEnd: scaleSize(16),
    },
    logoWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: '59%',
        width: '31%',
    },
});

export default styles;