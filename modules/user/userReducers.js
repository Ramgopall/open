import actions from 'modules/user/userActions';

const initialData = {
    record: null,
    loading: false,
    loginType: '',
};

export default (state = initialData, { type, payload }) => {

    if (type === actions.RESETED) {
        return {
            ...initialData,
        };
    }

    if (type === actions.FETCH_STARTED) {
        return {
            ...state,
            loading: true,
        };
    }

    if (type === actions.FETCH_SUCCESS) {
        return {
            ...state,
            loading: false,
            record: payload.record,
            loginType: payload.loginType,
        };
    }

    if (type === actions.SET) {
        return {
            ...state,
            loading: false,
            record: payload.record,
            loginType: payload.loginType,
        };
    }


    if (type === actions.FETCH_ERROR) {
        return {
            ...state,
            loading: false,
            record: null,
            loginType: ''
        };
    }

    return state;
};
