import Service from 'modules/home/homeService';

const prefix = 'HOME';

const actions = {

    FETCH_STARTED: `${prefix}_FETCH_STARTED`,
    FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
    FETCH_ERROR: `${prefix}_FETCH_ERROR`,
    RESETED: `${prefix}_RESETED`,


    doStudentHome: () => async (
        dispatch,
        getState,
    ) => {
        try {
            dispatch({
                type: actions.FETCH_STARTED,
            });

            const response = await Service.studentHome();

            dispatch({
                type: actions.FETCH_SUCCESS,
                payload: {
                    record: response
                },
            });
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

    doStaffHome: () => async (
        dispatch,
        getState,
    ) => {
        try {
            dispatch({
                type: actions.FETCH_STARTED,
            });

            const response = await Service.staffHome();
            dispatch({
                type: actions.FETCH_SUCCESS,
                payload: {
                    record: response
                },
            });

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

};




export default actions;
