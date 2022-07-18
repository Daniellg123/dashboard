import { Typography, Box, ButtonBase } from "@mui/material";
import Container from "../components/templates/Container";
import SearchBar from "../components/molecules/SearchBar/SearchBar";
import Filters from "../components/molecules/Filters/Filters"
import ButtonText from "../components/molecules/ButtonText/ButtonText";

import PrincipalCard from "../components/molecules/PrincipalCard/PrincipalCard";
import ImageCard from "../components/atoms/ImageCard/ImageCard";
import SimpleCard from "../components/molecules/SImpleCard/SimpleCard";
import SecondaryCard from "../components/molecules/SecondaryCard/SecondaryCard";

import { useState } from "react";

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
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);

    return (
        <Container>

            <Box>
                <Typography variant="subtitle2">Organization Chart</Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", gap: "20px" }}>
                    <SearchBar />
                    <Filters />
                </div>
                <div>
                    <ButtonText text={"Create Organizational Unit"} />
                </div>
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
                <Box sx={{ mb: 2, display: "flex", gap: "20px" }}>
                    <ButtonBase>
                        <ImageCard imgDir={"./img/logo1.png"} size={48} />
                    </ButtonBase>
                    <ButtonBase>
                        <ImageCard imgDir={"./img/logo1.png"} size={48} />
                    </ButtonBase>
                    <ButtonBase>
                        <ImageCard imgDir={"./img/logo1.png"} size={48} />
                    </ButtonBase>
                    <ButtonBase>
                        <ImageCard imgDir={"./img/logo1.png"} size={48} />
                    </ButtonBase>
                    <ButtonBase>
                        <ImageCard imgDir={"./img/logo1.png"} size={48} />
                    </ButtonBase>
                </Box>
                <Box sx={{ mb: 2, overflow: "auto", display: "flex", gap: "10px" }}>
                    <ButtonBase>
                        <SimpleCard title={"BluePixel"} img={"./img/logo1.png"} />
                    </ButtonBase>
                    <ButtonBase>
                        <SimpleCard title={"BluePixel"} img={"./img/logo1.png"} />
                    </ButtonBase>
                    <ButtonBase>
                        <SimpleCard title={"BluePixel"} img={"./img/logo1.png"} />
                    </ButtonBase>
                    <ButtonBase>
                        <SimpleCard title={"BluePixel"} img={"./img/logo1.png"} />
                    </ButtonBase>
                    <ButtonBase>
                        <SimpleCard title={"BluePixel"} img={"./img/logo1.png"} />
                    </ButtonBase>
                    <ButtonBase>
                        <SimpleCard title={"BluePixel"} img={"./img/logo1.png"} />
                    </ButtonBase>
                </Box>
                <Box sx={{ mb: 2, display: "flex", gap: "10px" }}>
                    <ButtonBase onClick={() => { active1 ? setActive1(false) : setActive1(true) }}>
                        <SecondaryCard img={"./img/logo1.png"} imgP={"./img/p.png"} title={"DiseñoUX"} users={123} units={43} name={"Daniel"} position={"Encargado"} selected={active1} />
                    </ButtonBase>
                    <ButtonBase onClick={() => { active2 ? setActive2(false) : setActive2(true) }}>
                        <SecondaryCard img={"./img/logo1.png"} imgP={"./img/p.png"} title={"DiseñoUX"} users={123} units={43} name={"Daniel"} position={"Encargado"} selected={active2} />
                    </ButtonBase>
                    <ButtonBase onClick={() => { active3 ? setActive3(false) : setActive3(true) }}>
                        <SecondaryCard img={"./img/logo1.png"} imgP={"./img/p.png"} title={"DiseñoUX"} users={123} units={43} name={"Daniel"} position={"Encargado"} selected={active3} />
                    </ButtonBase>
                </Box>
                <Box sx={{ mb: 2, overflow: "auto", display: "flex", gap: "10px" }}>
                    <ButtonBase>
                        <SimpleCard title={"BluePixel"} img={"./img/logo1.png"} />
                    </ButtonBase>
                    <ButtonBase>
                        <SimpleCard title={"BluePixel"} img={"./img/logo1.png"} />
                    </ButtonBase>
                    <ButtonBase>
                        <SimpleCard title={"BluePixel"} img={"./img/logo1.png"} />
                    </ButtonBase>
                    <ButtonBase>
                        <SimpleCard title={"BluePixel"} img={"./img/logo1.png"} />
                    </ButtonBase>
                    <ButtonBase>
                        <SimpleCard title={"BluePixel"} img={"./img/logo1.png"} />
                    </ButtonBase>
                    <ButtonBase>
                        <SimpleCard title={"BluePixel"} img={"./img/logo1.png"} />
                    </ButtonBase>
                </Box>
                <Box sx={{ mb: 2, display: "flex", gap: "20px" }}>
                    <ButtonBase>
                        <ImageCard imgDir={"./img/logo1.png"} size={48} />
                    </ButtonBase>
                    <ButtonBase>
                        <ImageCard imgDir={"./img/logo1.png"} size={48} />
                    </ButtonBase>
                    <ButtonBase>
                        <ImageCard imgDir={"./img/logo1.png"} size={48} />
                    </ButtonBase>
                    <ButtonBase>
                        <ImageCard imgDir={"./img/logo1.png"} size={48} />
                    </ButtonBase>
                    <ButtonBase>
                        <ImageCard imgDir={"./img/logo1.png"} size={48} />
                    </ButtonBase>
                </Box>
            </Box>
        </Container>
    );
};

export default OrganizationChar;