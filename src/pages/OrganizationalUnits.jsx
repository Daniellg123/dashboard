import { Link } from "@mui/material";
import Container from "../templates/Container";

import { useNavigate } from "react-router-dom";

function OrganizationalUnits() {
    const navigate = useNavigate();
    return (
        <Container>
            <Link onClick={() => {navigate('/organizationchar')}}>OrganizationChar</Link>
        </Container>
    );
};

export default OrganizationalUnits;