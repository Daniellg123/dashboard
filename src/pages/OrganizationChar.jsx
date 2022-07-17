import { Typography, Box, ButtonBase, Tabs, Tab } from "@mui/material";
import Container from "../templates/Container";
import SearchBar from "../molecules/SearchBar/SearchBar";
import Filters from "../molecules/Filters/Filters"
import ButtonText from "../molecules/ButtonText/ButtonText";

import PrincipalCard from "../molecules/PrincipalCard/PrincipalCard";
import ImageCard from "../atoms/ImageCard/ImageCard";
import SimpleCard from "../molecules/SImpleCard/SimpleCard";

import { useLocation } from 'react-router-dom';

const data = {
    title: "BluePixel",
    content1: 10,
    content2: [
        {
            title: "Diseño UI",
            units: 1,
            users: 200,
            name: "Oswaldo"
        },
        {
            title: "Diseño UX",
            units: 7,
            users: 123,
            name: "Daniel"

        },
        {
            title: "Diseño Grafico",
            units: 2,
            users: 200,
            name: "Filiberto"
        },
    ],
};

function OrganizationChar() {
    const location = useLocation();
    return (
        <Container>
            <Box>
                {location.pathname}
                <Typography variant="subtitle1">Organization Chart</Typography>
            </Box>

            <Box sx={{ flexGrow: 1, display: "flex", gap: 10 }}>
                <SearchBar />
                <Filters />
                <Box sx={{ flexGrow: 0 }}>
                    <ButtonText text={"Create Organizational Unit"} />
                </Box>
            </Box>

            <Box sx={{
                mt: 5,
                p: 1,
                border: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <Box sx={{ mb: 2 }}>
                    <ButtonBase>
                        <PrincipalCard img={"./img/logo1.png"} title={"BluePixel"} units={130} users={325} />
                    </ButtonBase>
                </Box>
                <Box sx={{ mb: 2 }}>
                    <ImageCard imgDir={"./img/logo1.png"} size={48} />
                </Box>
                <Box sx={{ mb: 2 }}>
                <Tabs
                        value={()=>{}}
                        onChange={()=>{}}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                        <Tab label="Item Four" />
                        <Tab label="Item Five" />
                        <Tab label="Item Six" />
                        <Tab label="Item Seven" />
                    </Tabs>
                    <SimpleCard title={"BluePixel"} img={"./img/logo1.png"} />
                </Box>
            </Box>
        </Container>
    );
};

export default OrganizationChar;