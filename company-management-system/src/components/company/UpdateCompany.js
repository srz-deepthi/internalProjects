import AddCompany from "./AddCompany";
import { useLocation} from 'react-router';

const UpdateCompany = () => {

    const {company} = useLocation().state

    return <div>
        <AddCompany company ={company} option='edit' />
    </div>;
}

export default UpdateCompany