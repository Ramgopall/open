import React from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from 'modules/store';

import theme from 'themes/theme';
import Navigator from 'routes/Navigation';
import SnackBar from 'components/SnackBar';



const App = () => {

    React.useEffect(() => {
        SplashScreen.hide();
    }, [])

    return (
        <ReduxProvider store={store}>
            <PaperProvider theme={theme}>
                <StatusBar translucent backgroundColor="transparent" />
                <Navigator />
                <SnackBar />
            </PaperProvider>
        </ReduxProvider>
    );

};

export default App;
