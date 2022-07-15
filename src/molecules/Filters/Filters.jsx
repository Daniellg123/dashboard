import { Button } from "@mui/material";
import { Funnel } from "phosphor-react";

function Filters() {
    return(
        <Button variant="outlined">
            <Funnel size={17}/>
            Filters
        </Button>
    );
};

export default Filters;