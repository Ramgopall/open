import React from 'react';
import { Snackbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import palette from 'themes/palette';
import errorSelectors from 'modules/error/errorSelectors';
import errorActions from 'modules/error/errorActions';

const styles = StyleSheet.create({
    snackbar: {
        backgroundColor: palette.primary.main
    },
});


const SnackBar = () => {
    const dispatch = useDispatch();
    const text = useSelector(errorSelectors.selectMessage);
    const visible = useSelector(errorSelectors.selectLoading);

    const onDismissSnackBar = () => {
        dispatch(errorActions.doReset());
    }

    return (
        <Snackbar
            visible={visible}
            duration={1000}
            onDismiss={() => onDismissSnackBar()}
            style={styles.snackbar}
        >
            {text}
        </Snackbar>
    );
};


function areEqual(prevProps, nextProps) {
    return prevProps === nextProps
}

export default React.memo(SnackBar, areEqual);
