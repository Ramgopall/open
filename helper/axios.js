import { baseUrl } from 'helper/constants';
import Axios from 'axios';
import { token } from 'helper/userdetail';

const authAxios = Axios.create({
    baseURL: baseUrl,
});

authAxios.interceptors.request.use(
    async function (options) {
        const tokenn = await token()
        if (tokenn) {
            options.headers['Authorization'] = `Bearer ${tokenn}`;
        }
        return options;
    },
    function (error) {
        console.log('Api Request error: ', error);
        const errorData = {
            status: false,
            message: 'Api Request Error Occur',
            data: error,
        }
        return Promise.reject(errorData);
    },
);

authAxios.interceptors.response.use(
    function (response) {
        if (response.status === 200) {
            const responseData = {
                status: true,
                message: response.data.message,
                data: response.data.data,
            }
            return responseData;
        }
    },
    function (error) {
        const response = error.response
        var errorData = { status: false, message: '', data: null }
        if (response.status === 400) {
            errorData = {
                status: false,
                message: response.data.message,
                data: null,
            }
        }
        else if (response.status === 401) {
            errorData = {
                status: false,
                message: 'User is not authorized: 401',
                data: null,
            }
        }
        else if (response.status === 403) {
            errorData = {
                status: false,
                message: 'User is not authorized: 403',
                data: null,
            }
        }
        else if (response.status === 404) {
            errorData = {
                status: false,
                message: 'Api not found',
                data: null,
            }
        }
        else if (response.status === 500) {
            errorData = {
                status: false,
                message: 'Server down, Please try after sometime',
                data: null,
            }
        }
        else {
            errorData = {
                status: false,
                message: `Unknown Response: ${response.status}`,
                data: null,
            }
        }
        return Promise.reject(errorData);
    }
);

export default authAxios;