import React from 'react';
import { View } from 'react-native';
import { Avatar, Title, Caption } from 'react-native-paper';
import FastImage from 'react-native-fast-image';

import { scaleSize } from 'helper/normalize';
import TextView from 'components/TextView';
import StudetyLogo from 'components/StudetyLogo';

import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DrawerSection = ({icon, text, onclick}) => {
return(
  <TouchableOpacity onPress={onclick}>
    <View style={styles.rowWrapper}>
      <FastImage source= {icon} resizeMode={FastImage.resizeMode.contain} style = {styles.icon} />
      <View style={styles.row}>
        <TextView customeSyle={styles.text} text={text} />
        <FastImage source= {require('assets/images/right_arrow_icon.png')} resizeMode={FastImage.resizeMode.contain} style = {styles.arrowIcon} />
      </View>
    </View>
  </TouchableOpacity>
  )
}

const DrawerContent = ({ navigation, ...rest }) => {
  const [name, setName] = React.useState('Ram Gopal');
  const [admissionNo, setAdmissionNo] = React.useState('Admission No: 1660');
  
  const onSectionClick = React.useCallback((path) => {
    
  }, []);

  return (
    <View style={styles.drawerContent}>
      <View style={styles.userInfoSection}>
        <View style={styles.avatarWrapper}>
          <Avatar.Image size={scaleSize(60)} 
                source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/41ONa5HOwfL.jpg'}}/>
          <View style={styles.titleWrapper}>
            <Title style={styles.title}>{name}</Title>
            <Caption style={styles.caption}>{admissionNo}</Caption>
          </View>
        </View>
      </View>
      <DrawerSection icon= {require('assets/images/drawer_home_icon.png')} text='About School' onclick={()=>onSectionClick('')}/>
      <DrawerSection icon= {require('assets/images/about_app_icon.png')} text='About App' onclick={()=>onSectionClick('')}/>
      <DrawerSection icon= {require('assets/images/password_icon.png')} text='Change Password' onclick={()=>onSectionClick('')}/>
      <DrawerSection icon= {require('assets/images/support_icon.png')} text='Support' onclick={()=>onSectionClick('')}/>
      <DrawerSection icon= {require('assets/images/fb_icon.png')} text='Facebook' onclick={()=>onSectionClick('')}/>
      <DrawerSection icon= {require('assets/images/youtube_icon.png')} text='Youtube' onclick={()=>onSectionClick('')}/>
      <DrawerSection icon= {require('assets/images/gmail_icon.png')} text='Gmail' onclick={()=>onSectionClick('')}/>
      <DrawerSection icon= {require('assets/images/twitter_icon.png')} text='Twitter' onclick={()=>onSectionClick('')}/>
      <StudetyLogo customeSyle={styles.logo}/>
      <View style={styles.logoutWrapper}>
        <TouchableOpacity style={{ height:'100%', width: '100%',justifyContent: 'center', alignItems: 'center',
      }}>
          <TextView customeSyle={styles.logoutText} text='LOGOUT' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DrawerContent;
