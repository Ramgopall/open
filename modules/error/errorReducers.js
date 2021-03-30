const initialData = {
    message: null,
    loading: false,
};

export default (state = initialData, { type, payload }) => {

    if (type === "GLOBAL_ERROR") {
        return {
            ...state,
            loading: true,
            message: payload.message,
        };
    }

    if (type === "RESET") {
        return {
            ...initialData
        };
    }

    return state;
};
