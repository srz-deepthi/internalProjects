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
    
    // let noEmptyContact = company.c_contact.filter(item => (item.number || item.email))
    // company.c_contact=noEmptyContact

    // console.log("remove empty con",noEmptyContact)
    
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