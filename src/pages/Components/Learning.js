import { Card, Container, Image, Info, List, ProjectWorkContainer } from '@/Components/ProjectWork'
import React from 'react'

const Learning = () => {
    return (
        <ProjectWorkContainer>
            <Container>
                <h2>Learning</h2>
                <List>
                    <Card>
                        <Image image={'/image/santri-koding.png'} onClick={() => window.open('https://santrikoding.com/', '_blank')} />
                        <Info>
                            <h3>Santri Koding</h3>
                        </Info>
                    </Card>
                    <Card>
                        <Image image={'/image/w3school.png'} onClick={() => window.open('https://www.w3schools.com/', '_blank')} />
                        <Info>
                            <h3>W3 School</h3>
                        </Info>
                    </Card>
                    <Card>
                        <Image image={'/image/unpas.png'} onClick={() => window.open('https://www.youtube.com/@sandhikagalihWPU', '_blank')} />
                        <Info>
                            <h3>Web Programming UNPAS</h3>
                        </Info>
                    </Card>
                    <Card>
                        <Image image={'/image/jamanNow.png'} onClick={() => window.open('https://www.youtube.com/@ProgrammerZamanNow', '_blank')} />
                        <Info>
                            <h3>
                                Programmer Zaman Now</h3>
                        </Info>
                    </Card>
                    <Card>
                        <Image image={'/image/dea.png'} onClick={() => window.open('https://www.youtube.com/@deaafrizal', '_blank')} />
                        <Info>
                            <h3>Dea Afrizal</h3>
                        </Info>
                    </Card>
                </List>
            </Container>
        </ProjectWorkContainer>
    )
}

export default Learning
