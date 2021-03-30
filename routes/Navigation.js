import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';

import { token, data, loginType } from 'helper/userdetail';
import userActions from 'modules/user/userActions';

import AboutApp from 'screens/aboutApp';
import AboutSchool from 'screens/aboutSchool';
import Achievement from 'screens/achievement';
import AchievementDetail from 'screens/achievementDetail';
import ChangePassword from 'screens/changePassword';
import Circular from 'screens/circular';
import Communication from 'screens/communication';
import CommunicationDetail from 'screens/communicationDetail';
import FullScreenImage from 'screens/fullScreenImage';
import Gallery from 'screens/gallery';
import GalleryDetail from 'screens/galleryDetail';
import LoginType from 'screens/loginType';
import Login from 'screens/login';
import News from 'screens/news';
import NewsDetail from 'screens/newsDetail';
import Timetable from 'screens/timetable';
import Transport from 'screens/transport';
import DrawerNavigation from './DrawerNavigation';

const Stack = createStackNavigator();

const Navigation = () => {
  const dispatch = useDispatch();
  const [getToken, setToken] = React.useState('');

  React.useEffect(() => {
    async function fetchData() {
      let tempToken = await token()
      let tempData = await data()
      let tempLoginType = await loginType()
      setToken(tempToken)
      dispatch(userActions.doSetData(tempData, tempLoginType))
    }
    fetchData();
  }, [])

  return (
    <NavigationContainer>
      {getToken === '' ? null :
        <Stack.Navigator headerMode="none">
          <Stack.Screen name={getToken === null ? "loginType" : "homeDrawer"} component={getToken === null ? LoginType : DrawerNavigation} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name={getToken === null ? "homeDrawer" : "loginType"} component={getToken === null ? DrawerNavigation : LoginType} />
          <Stack.Screen name="changePassword" component={ChangePassword} />
          <Stack.Screen name="aboutSchool" component={AboutSchool} />
          <Stack.Screen name="aboutApp" component={AboutApp} />
          <Stack.Screen name="achievement" component={Achievement} />
          <Stack.Screen name="achievementDetail" component={AchievementDetail} />
          <Stack.Screen name="circular" component={Circular} />
          <Stack.Screen name="communication" component={Communication} />
          <Stack.Screen name="communicationDetail" component={CommunicationDetail} />
          <Stack.Screen name="fullScreenImage" component={FullScreenImage} />
          <Stack.Screen name="gallery" component={Gallery} />
          <Stack.Screen name="galleryDetail" component={GalleryDetail} />
          <Stack.Screen name="news" component={News} />
          <Stack.Screen name="newsDetail" component={NewsDetail} />
          <Stack.Screen name="timetable" component={Timetable} />
          <Stack.Screen name="transport" component={Transport} />
        </Stack.Navigator>
      }

    </NavigationContainer>
  );
};
export default Navigation;
