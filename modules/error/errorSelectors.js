import { createSelector } from 'reselect';

const selectRaw = (state) => state.error;;

const selectLoading = createSelector(
    [selectRaw],
    (raw) => raw.loading,
);

const selectMessage = createSelector(
    [selectRaw],

    (raw) => raw.message,
);



export default {
    selectLoading,
    selectMessage,
};
