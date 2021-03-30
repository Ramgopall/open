import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
    laoder: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5
    },
});

const Loader = () => {
    return (
        <View style={styles.laoder}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
    );
};


function areEqual(prevProps, nextProps) {
    return prevProps === nextProps
}

export default React.memo(Loader, areEqual);
