import React, { useState } from 'react';
import { ImageBackground, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import userSelector from 'modules/user/userSelectors';
import userActions from 'modules/user/userActions';
import CardView from 'components/CardView';
import StudetyLogo from 'components/StudetyLogo';
import SchoolLogo from 'components/SchoolLogo';
import TextView from 'components/TextView';
import ButtonView from 'components/ButtonView';
import EditText from 'components/EditText';
import Loader from 'components/Loader';

import styles from './style';

const bgImage = require('assets/images/login_bg.png');


const Login = (props) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const userType = props.route.params.isStaffSelected;

    const isLoaderVisible = useSelector(userSelector.selectLoading);

    const login = () => {
        if (userType) {
            dispatch(userActions.doStaffLogin(username, password, props.navigation));
        } else {
            dispatch(userActions.doStudentLogin(username, password, props.navigation));
        }
    };

    return (
        <ImageBackground style={styles.backgroundImage} source={bgImage}>
            <View style={styles.schoolLogoWrapper}>
                <SchoolLogo customeSyle={styles.schoolLogo} />
            </View>
            <View style={styles.accountTypeWrapper}>
                <CardView customeSyle={styles.card}>
                    <TextView customeSyle={styles.title} text='Login' />
                    <TextView customeSyle={styles.subTitle} text='Enter the following fields to continue' />
                    <View style={styles.editTextWrapper}>
                        <TextView customeSyle={styles.fieldTitle} text='User Name' />
                        <EditText placeholder='Enter Username' text={username} textChange={setUsername} iconName={require('assets/images/user_gray_icon.png')} />
                        <TextView customeSyle={styles.fieldTitle} text='Password' />
                        <EditText placeholder='Enter Password' text={password} textChange={setPassword} iconName={require('assets/images/lock_gray_icon.png')} isPassword />
                    </View>
                    <View style={styles.buttonWrapper}>
                        <ButtonView text='Login' onClick={() => login()} />
                    </View>
                </CardView>
            </View>
            <View style={styles.logoWrapper}>
                <StudetyLogo customeSyle={styles.logo} />
            </View>

            {isLoaderVisible ? <Loader visible={isLoaderVisible} /> : null}
        </ImageBackground>
    );
};


export default Login;
