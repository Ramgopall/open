import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
    laoder: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

const FooterLoader = () => {
    return (
        <View style={styles.laoder}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
};


function areEqual(prevProps, nextProps) {
    return prevProps === nextProps
}

export default React.memo(FooterLoader, areEqual);
