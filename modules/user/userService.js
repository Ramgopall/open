import authAxios from 'helper/axios';

export default class UserService {
    static async studentLogin(username, password) {
        const parameters = { admissionid: username.toString(), password: password.toString() }
        const response = await authAxios.post(`studentapp/admissions/login`, parameters);
        return response.data;
    }

    static async staffLogin(username, password) {

        const parameters = { username: username, password: password }
        const response = await authAxios.post(`teacherapp/staff/login`, parameters);
        return response.data;
    }
}
