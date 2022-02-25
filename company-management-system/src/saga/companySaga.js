
import { call,put,takeEvery } from 'redux-saga/effects';
import axios from 'axios';

  export function* watchGetUser(){
      console.log("inside..saga..getUser..")
    yield takeEvery('GET_COMPANY',getCompany);
  }

  export function* watchAddUser(){
    console.log("inside..saga..postUser..")
    yield takeEvery('ADD_COMPANY',postCompany);
  }

  export function* watchUpdateUser() {
    yield takeEvery('UPDATE_COMPANY', updateCompany);
  }
  
  export function* watchDeleteUser() {
    yield takeEvery('DELETE_COMPANY', deleteCompany);
  }


  function* getCompany(){
    try{
      console.log('..inside get saga')
      const res = yield call(axios.get,"http://localhost:8000/company")
      console.log("inside getuser...",res.data)
      yield put({type:'GET_COMPANY_INFO',getInfo : res.data});
    }
    catch (e) { console.log('error....',e) }
  }


  function* postCompany(action){
    try{
      console.log("inside..post user..",action.payload)
      const res = yield call(axios.post,"http://localhost:8000/company",action.payload)
      console.log("inside postuser...",res);
      yield put({type:'ADD_COMPANY_INFO',postInfo : res.data});
    }
    catch (e) { console.log('error...',e) }
  }


  function* updateCompany(action){
    try{
        const udata = action.payload;
        yield call(axios.put,"http://localhost:8000/company/"+udata.id, udata); 
        yield put({type:"GET_COMPANY"});
      }
      catch (e) { console.log('error',e) }
  }


  function* deleteCompany(action){
    try{
      console.log('inside delete...',action.payload)
      yield call( axios.delete, "http://localhost:8000/company/"+action.payload);
      yield put({type:'GET_COMPANY'});
    }
    catch (e) { console.log('error',e) }
  }