import React from 'react';
import { Image, ImageBackground, View, TouchableOpacity } from 'react-native';

import CardView from 'components/CardView';
import StudetyLogo from 'components/StudetyLogo';
import SchoolLogo from 'components/SchoolLogo';
import TextView from 'components/TextView';
import ButtonView from 'components/ButtonView';

import styles from './style';

const bgImage = require('assets/images/login_bg.png');
const studentLogo = require('assets/images/student.png');
const tearcherLogo = require('assets/images/teacher.png');


const LoginType = ({ navigation }) => {
    const [isStaffSelected, setStaffSelection] = React.useState(true);

    const selectionClick = (type) =>{
        if(type==='staff'){
            setStaffSelection(true)
        }else{
            setStaffSelection(false)
        }
    }

    return (
        <ImageBackground style={styles.backgroundImage} source={bgImage}>
            <View style={styles.schoolLogoWrapper}>
                <SchoolLogo customeSyle={styles.schoolLogo} />
            </View>
            <View style={styles.accountTypeWrapper}>
                <CardView customeSyle={styles.card}>
                    <TextView customeSyle={styles.title} text='Account'/>
                    <TextView customeSyle={styles.subTitle} text={`Choose your account type to\ncontinue`}/>
                    <View style={styles.choiceWrapper}>
                        <TouchableOpacity style={[styles.choiceTypeWrapper, isStaffSelected  ? styles.borderColorBlue : null]} onPress={() => selectionClick('staff')}>
                            
                                <Image source={tearcherLogo} style={styles.staffLogo}/>
                                <TextView customeSyle={styles.nameTitle} text='STAFF'/>
                            
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.choiceTypeWrapper, isStaffSelected  ? null : styles.borderColorBlue]} onPress={() => selectionClick('student')}>
                                <Image source={studentLogo} style={styles.staffLogo}/>
                                <TextView customeSyle={styles.nameTitle} text='STUDENT'/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonWrapper}>
                        <ButtonView text='Continue' onClick={()=>navigation.replace('login',{isStaffSelected: isStaffSelected})}/>
                    </View>
                </CardView>
            </View>
            <View style={styles.logoWrapper}>
                <StudetyLogo customeSyle={styles.logo}/>
            </View>
        </ImageBackground>
    );
};


export default LoginType;
