import { useState } from "react";
import { connect } from "react-redux";
import { AddCompanyAction, UpdateCompanyAction} from "../../companyRedux/companyAction";
import { useNavigate } from 'react-router'
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const AddCompany = (props) => {

    let navigate = useNavigate();

    const [company, setCompany] = useState({
        id :props.company.id, 
        c_name:props.company.c_name,
        c_ceo:props.company.c_ceo,
        c_founded: props.company.c_founded,
        c_head: props.company.c_head,
        c_empNo: props.company.c_empNo
    })

    const handleChange = (e) => {
        const name = e.target.name
        setCompany(
                {
                    ...company,
                    [name]: e.target.value
                }
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("add form.. ",company)
        if(props.option === 'add'){
            props.AddCompanyAction(company)
            navigate('/view');
        }
        else {
            props.UpdateCompanyAction(company)
            navigate('/view');
        }
    }

    return (
        <div>

            <div>
                <form onSubmit={handleSubmit}>                    
                        <TextField
                                    sx={{ m: 3, width: 400 }}
                                    // id="outlined-name"
                                    name="c_name"
                                    type="text"
                                    label="Company Name"
                                    value={company.c_name}
                                    onChange={handleChange}
                            /><br/>                    
                        <TextField
                            sx={{ m: 3, width: 400 }}
                            type="text"
                            name="c_ceo"
                            value={company.c_ceo}
                            label="CEO"
                            onChange={handleChange}
                        /><br/>
                        <TextField
                            sx={{ m: 3, width: 400 }}
                            type="number"
                            name="c_founded"
                            value={company.c_founded}
                            label="Founded"
                            onChange={handleChange}
                        /><br/>
                        <TextField
                            sx={{ m: 3, width: 400 }}
                            type="text"
                            name="c_head"
                            value={company.c_head}
                            onChange={handleChange}
                            label="Head Quaters"
                        /><br/>
                        <TextField
                            sx={{ m: 3, width: 400 }}
                            type="number"
                            name="c_empNo"
                            value={company.c_empNo}
                            onChange={handleChange}
                            label="Total Employees"
                        /><br/>
                    <Button variant="contained"  sx={{ m: 3 , width: 150, height: 45  }} type="submit">
                        SUBMIT
                    </Button>
                    <div>
                        <Button variant="contained"  sx={{ m: 3 , width: 150, height: 45  }}>            
                            <Link to='/addcontact' style={{textDecoration: "none" , color: "white"}} state={{ comp:company,option:props.option }}>Add Contact</Link>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    
    return {
        
        AddCompanyAction: (company) => dispatch(AddCompanyAction(company)),
        UpdateCompanyAction : (company) => dispatch(UpdateCompanyAction(company))
    }
}

export default connect(null,mapDispatchToProps)(AddCompany)