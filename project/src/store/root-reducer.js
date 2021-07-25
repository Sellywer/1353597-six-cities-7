import {combineReducers} from 'redux';
import {ui} from './ui/ui';
import {data} from './data/data';
import {user} from './user/user';

export const NameSpace = {
  DATA: 'DATA',
  UI: 'UI',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.UI]: ui,
  [NameSpace.USER]: user,
});
