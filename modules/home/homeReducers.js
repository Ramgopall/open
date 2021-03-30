import actions from 'modules/home/homeActions';

const initialData = {
    record: null,
    loading: true,
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
        };
    }

    if (type === actions.FETCH_ERROR) {
        return {
            ...state,
            loading: false,
            record: null,
        };
    }

    return state;
};
