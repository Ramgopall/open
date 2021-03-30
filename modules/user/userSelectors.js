import { createSelector } from 'reselect';

const selectRaw = (state) => state.user;

const selectLoading = createSelector(
    [selectRaw],
    (raw) => raw.loading,
);

const selectRecord = createSelector(
    [selectRaw],
    (raw) => raw.record,
);

const selectLoginType = createSelector(
    [selectRaw],
    (raw) => raw.loginType,
);



export default {
    selectLoading,
    selectRecord,
    selectLoginType,
};
