import authAxios from 'helper/axios';

export default class HomeService {
    static async studentHome() {
        const response = await authAxios.get(`studentapp/home`);
        return response.data;
    }

    static async staffHome() {
        const response = await authAxios.get(`teacherapp/home`);
        return response.data;
    }
}
