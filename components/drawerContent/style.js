import { StyleSheet } from 'react-native';

import { scaleSize } from 'helper/normalize';
import palette from 'themes/palette';
import { ml, m, sm_12, sm } from 'helper/constants';

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
      },
      userInfoSection: {
        backgroundColor: palette.primary.main,
        padding: scaleSize(18),
      },
      avatarWrapper: {
        flexDirection: 'row',
      },
      titleWrapper: {
        marginLeft: scaleSize(16),
        flexDirection: 'column',
      },
      title: {
        color: palette.white.main,
        fontSize: ml,
        fontFamily: 'Roboto-Bold',
      },
      caption: {
        color: palette.white.main,
        fontSize: sm_12,
      },
      rowWrapper: {
        flexDirection: 'row',
        width: '100%',
        paddingTop: scaleSize(12),
        paddingEnd: scaleSize(8),
        paddingStart: scaleSize(12),
        paddingBottom: scaleSize(8),
        alignItems: 'center',
        borderBottomWidth: scaleSize(1),
        borderBottomColor: palette.grey.light,
      },
      row: {
        marginLeft: scaleSize(16),
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        width:'83%'
      },
      icon: {
        height: scaleSize(16),
        width: scaleSize(16),
      },
      arrowIcon: {
        height: scaleSize(9),
        width: scaleSize(9),
      },
      text: {
        fontSize: sm,
        fontFamily: 'Roboto-Bold',
        color: palette.primary.main,
      },
      logo: {
        marginStart: scaleSize(12),
        marginTop: scaleSize(12),
        height: scaleSize(34),
        width: scaleSize(110),
      },
      logoutWrapper: {
        height: scaleSize(40),
        width: '100%',
        backgroundColor: palette.grey.lightDark,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
      },
      logoutText: {
        fontSize: m,
        fontFamily: 'Roboto-Bold',
        color: palette.primary.main,
        width:'100%'
      },
});

export default styles;