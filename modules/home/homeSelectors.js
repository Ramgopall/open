import { createSelector } from 'reselect';

const selectRaw = (state) => state.home;

const selectLoading = createSelector(
    [selectRaw],
    (raw) => raw.loading,
);

const selectRecord = createSelector(
    [selectRaw],
    (raw) => raw.record,
);



export default {
    selectLoading,
    selectRecord,
};
