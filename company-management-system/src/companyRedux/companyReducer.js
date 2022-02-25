
const initialState = {
    company : [],
    type : ''
}

const CompanyReducer = (state = initialState, action) => {
    
    console.log("inside reducer , sate ...",state.company)
    console.log("inside reducer , action ...",action)
    if(action.type === 'ADD_COMPANY_INFO'){
        return{
            ...state,
            company:[...state.company, action.postInfo],
            type : action.type
        } 
    }

    if(action.type === 'GET_COMPANY_INFO'){
        return{
            ...state,
            company : action.getInfo,
            type : action.type
        }
    }

    return state
}

export default CompanyReducer