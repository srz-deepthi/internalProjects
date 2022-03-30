import React,{useState} from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router';
import { AddCompanyAction,UpdateCompanyAction } from "../../companyRedux/companyAction";
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
const AddContact=(props) =>{

    let navigate = useNavigate();
    console.log("add contact",useLocation().state.comp)
    const option=useLocation().state.option
    console.log("option",option)
    const {comp} = useLocation().state

    const [contact, setContacts] = useState({
        number: undefined ,
        email: ''
    })
    const [company,setCompanyContact]=useState({
                id :comp.id, 
                c_name:comp.c_name,
                c_ceo:comp.c_ceo,
                c_founded: comp.c_founded,
                c_head: comp.c_head,
                c_empNo: comp.c_empNo,
                c_contact:comp.c_contact

    })

    const handleC=(e)=>{
        const name = e.target.name
        setContacts(
            {
                ...contact,
                [name]: e.target.value
            }   
        )
    }

    const handleCancel = () => {
        navigate('/view');
    }
    
    const handleSubmit=(e) =>{

         e.preventDefault()
         company.c_contact.push(contact)
         if(option === 'add'){
            props.AddCompanyAction(company)
            navigate('/view');
        }
        else {
            props.UpdateCompanyAction(company)
            navigate('/view');
        }      
     
    }
    // delete company['c_contact'];
    console.log("delete in add contact",company)
  return <div>
      <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form_group row">
                        {/* <label className="col-sm-2">Con.Number</label> */}
                        <div className="col-sm-4">
                            <TextField
                                    sx={{ m: 3, width: 400 }}
                                    id="outlined-name"
                                    name="number"
                                    type="number"
                                    label="Contact Number"
                                    value={contact.number}
                                    onChange={handleC}
                                    required
                            />
                            {/* <input type="number" name="number" value={company.c_contact.number} onChange={handleC} required/> */}
                        </div>
                    </div>
                    <div className="form_group row">
                        {/* <label className="col-sm-2">Email</label> */}
                        <div className="col-sm-10">
                            <TextField
                                        sx={{ m: 3, width: 400 }}
                                        id="outlined-name"
                                        name="email"
                                        type="email"
                                        label="Email"
                                        value={contact.email}
                                        onChange={handleC}
                                        required
                            />
                            {/* <input type="email" name="email" value={company.c_contact.email} onChange={handleC}/> */}
                        </div>
                    </div>   
                    <div className="container-fluid">
                        <div className="form_group row" id="addB">
                            <Button variant="contained"  sx={{ m: 3 , width: 150, height: 45}} onClick={handleCancel} >
                                CANCEL
                            </Button>
                            <Button variant="contained"  sx={{ m: 3 , width: 150, height: 45}} type='submit' >
                                ADD
                            </Button>
                        </div>
                    </div> 
                </form>
            </div>
        </div>
  </div>;
}


const mapStateToProps = (state) =>
{
    return{
        comp: state.company
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        UpdateCompanyAction: ( company ) => dispatch( UpdateCompanyAction( company ) ),
        AddCompanyAction: ( company ) => dispatch( AddCompanyAction( company ) )
    }
}
export default connect(
                mapStateToProps,
                mapDispatchToProps
            )(AddContact)
