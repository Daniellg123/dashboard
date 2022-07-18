import { ButtonBase, Link, Typography } from "@mui/material";
import Container from "../components/templates/Container";

import { useNavigate } from "react-router-dom";
import ButtonText from "../components/molecules/ButtonText/ButtonText";

function OrganizationalUnits() {
    const navigate = useNavigate();
    return (
        <Container>
            <ButtonText color={"green"} text={"Organization Char"} onClick={() => {navigate('/orgchar')}}/>
            
        </Container>
    );
};

export default OrganizationalUnits;