import { Link } from "@mui/material";
import Container from "../components/templates/Container";

import { useNavigate } from "react-router-dom";

function OrganizationalUnits() {
    const navigate = useNavigate();
    return (
        <Container>
            <Link onClick={() => {navigate('/orgchar')}}>OrganizationChar</Link>
        </Container>
    );
};

export default OrganizationalUnits;