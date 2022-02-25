export const AddCompanyAction = (company) => {
    console.log("inside action", company)
    return {
        type: "ADD_COMPANY",
        payload : company 
    }
}

export const GetCompanyAction = () => {
    return {
        type: "GET_COMPANY",
    }
}

export const UpdateCompanyAction = (company) => {
    return {
        type: "UPDATE_COMPANY",
        payload : company 
    }
}

export const DeleteCompanyAction = (c_id) => {
    return {
        type: "DELETE_COMPANY",
        payload : c_id 
    }
}