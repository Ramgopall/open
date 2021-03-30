import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import palette from 'themes/palette';

const Fab = ({customeStyle,icon,onClick}) => (
  <FAB
    style={[styles.fab, customeStyle]}
    icon={icon?icon:"plus"}
    onPress={onClick}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: palette.primary.main
  },
})


function areEqual(prevProps, nextProps) {
    return prevProps === nextProps
}

export default React.memo(Fab, areEqual);