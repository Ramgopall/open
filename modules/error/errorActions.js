const actions = {
    doReset: () => async (
        dispatch,
        getState,
    ) => {
        dispatch({
            type: "RESET",
        });
    },

};




export default actions;
