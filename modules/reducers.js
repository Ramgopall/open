import user from './user/userReducers';
import error from './error/errorReducers';
import home from './home/homeReducers';
import news from './news/newsReducers';
import achievement from './achievement/achievementReducers';
import circular from './circular/circularReducers';
import homework from './homework/homeworkReducers';
import transport from './transport/transportReducers';

import { combineReducers } from 'redux';

export default () =>
    combineReducers({
        user,
        error,
        home,
        news,
        achievement,
        circular,
        homework,
        transport
    })