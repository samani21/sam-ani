import { Add, Container, ContentContainer, Detail, DetailContainer, FooterDetail, Icon, Image, Menu, Menus, Name, ProfilContainer, ProfileImage } from '@/Components/Profil'
import React, { useState } from 'react'
const Profil = () => {
    return (
        <ProfilContainer>
            <Container>
                <ContentContainer>
                    <DetailContainer>
                        <Name>
                            Sam'ani
                        </Name>
                        <Add>@sam__ani</Add>
                        <Detail>
                            <Icon src='/image/balloon.svg' />
                            21 Juni 1999
                        </Detail>
                        <Detail>
                            <Icon src='/image/pinn.svg' />
                            Programmer
                        </Detail>
                        <Detail>
                            <Icon src='/image/dev.svg' />
                            Full stack web developer
                        </Detail>
                    </DetailContainer>
                    <FooterDetail>
                        <Detail style={{ padding: "10px", fontSize: "11px" }}>
                            <Icon src='/image/maps.svg' />
                            Jl.Gerilya peradapan
                        </Detail>
                        <Detail style={{ padding: "10px", fontSize: "11px", cursor: "pointer" }}>
                            <Icon src='/image/download.svg' />
                            Download CV
                        </Detail>
                    </FooterDetail>
                </ContentContainer>
            </Container>
        </ProfilContainer>
    )
}

export default Profil
