import AsyncStorage from '@react-native-async-storage/async-storage';

export const token = async () => await AsyncStorage.getItem('token')
export const data = async () => await AsyncStorage.getItem('data')
export const loginType = async () => await AsyncStorage.getItem('logintype')


// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const token = async() => await AsyncStorage.getItem('token')
// export const sectionId = async() => await AsyncStorage.getItem('section_id')
// export const dob = async() => await AsyncStorage.getItem('dob')
// export const name = async() => await AsyncStorage.getItem('name')
// export const admissionNo = async() => await AsyncStorage.getItem('admissionid')
// export const fatherName = async() => await AsyncStorage.getItem('father_name')
// export const motherName = async() => await AsyncStorage.getItem('mother_name')
// export const primaryContact = async() => await AsyncStorage.getItem('primary_contact')
// export const emailId = async() => await AsyncStorage.getItem('emailid')
// export const address = async() => await AsyncStorage.getItem('address')
// export const candidatePicture = async() => await AsyncStorage.getItem('candidate_picture')
// export const className = async() => await AsyncStorage.getItem('classname')
// export const classIncharge = async() => await AsyncStorage.getItem('classincharge')
// export const subjects = async() => await AsyncStorage.getItem('subjects')
// export const loginType = async() => await AsyncStorage.getItem('logintype')