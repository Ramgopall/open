import Service from 'modules/user/userService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const prefix = 'USER';

const actions = {

    FETCH_STARTED: `${prefix}_FETCH_STARTED`,
    FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
    FETCH_ERROR: `${prefix}_FETCH_ERROR`,
    SET: `${prefix}_SET`,
    RESETED: `${prefix}_RESETED`,


    doStudentLogin: (username, password, navigation) => async (
        dispatch,
        getState,
    ) => {
        try {
            dispatch({
                type: actions.FETCH_STARTED,
            });

            const response = await Service.studentLogin(
                username, password
            );

            let newData = {}
            newData.id = response.id
            newData.section_id = response.section_id ? response.section_id : ''
            newData.dob = response.dob ? response.dob : ''
            newData.name = response.first_name + (response.middle_name ? ' ' + response.middle_name : '') + (response.last_name ? ' ' + response.last_name : '')
            newData.admissionid = response.admissionid ? response.admissionid : ''
            newData.father_name = response.father_name ? response.father_name : ''
            newData.mother_name = response.mother_name ? response.mother_name : ''
            newData.phone = response.primary_contact ? response.primary_contact : ''
            newData.email = response.emailid ? response.emailid : ''
            newData.address = response.address ? response.address : ''
            newData.photo = response.candidate_picture ? response.candidate_picture : ''
            newData.classname = response.classname ? response.classname : ''
            newData.classincharge = response.classincharge ? response.classincharge : ''
            newData.token = response.token ? response.token : ''
            newData.subjects = response.subjects

            await AsyncStorage.setItem('data', JSON.stringify(newData))
            await AsyncStorage.setItem('token', newData.token)
            await AsyncStorage.setItem('logintype', 'student')

            dispatch({
                type: actions.FETCH_SUCCESS,
                payload: {
                    record: newData,
                    loginType: 'student'
                },
            });
            navigation.replace('homeDrawer')
        } catch (error) {

            dispatch({
                type: actions.FETCH_ERROR,
            });
            dispatch({
                type: "GLOBAL_ERROR",
                payload: {
                    message: error.message
                },
            });
        }
    },

    doStaffLogin: (username, password, navigation) => async (
        dispatch,
        getState,
    ) => {
        try {
            dispatch({
                type: actions.FETCH_STARTED,
            });

            const response = await Service.staffLogin(
                username, password
            );

            let newData = {}
            newData.id = response.id
            newData.email = response.email ? response.email : ''
            newData.username = response.username ? response.username : ''
            newData.name = response.name
            newData.phone = response.phone ? response.phone : ''
            newData.address = response.address ? response.address : ''
            newData.photo = response.photo ? response.photo : ''
            newData.password = response.password ? response.password : ''
            newData.status = response.status ? response.status : ''
            newData.classname = response.classname ? response.classname : ''
            newData.token = response.token ? response.token : ''
            newData.subjects = response.subjects

            await AsyncStorage.setItem('data', JSON.stringify(newData))
            await AsyncStorage.setItem('token', newData.token)
            await AsyncStorage.setItem('logintype', 'staff')

            dispatch({
                type: actions.FETCH_SUCCESS,
                payload: {
                    record: newData,
                    loginType: 'staff'
                },
            });

            navigation.replace('homeDrawer')

        } catch (error) {
            dispatch({
                type: actions.FETCH_ERROR,
            });
            dispatch({
                type: "GLOBAL_ERROR",
                payload: {
                    message: error.message
                },
            });
        }
    },

    doReset: () => async (
        dispatch,
        getState,
    ) => {
        dispatch({
            type: actions.RESETED,
        });
    },

    doSetData: (data, loginType) => async (
        dispatch,
        getState,
    ) => {
        dispatch({
            type: actions.SET,
            payload: {
                record: JSON.parse(data),
                loginType: loginType
            },
        });
    },

};




export default actions;
