
import { all } from 'redux-saga/effects';
import { watchGetUser,watchAddUser, watchDeleteUser, watchUpdateUser} from './companySaga'; 

export default function * rootSaga(){
  yield all([
    watchAddUser(),
    watchGetUser(),
    watchUpdateUser(),
    watchDeleteUser()
  ])
}