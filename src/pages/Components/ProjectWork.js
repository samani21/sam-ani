import { Card, Container, Image, Info, List, ProjectWorkContainer } from '@/Components/ProjectWork'
import React from 'react'

const ProjectWork = () => {
    return (
        <ProjectWorkContainer>
            <Container>
                <h2>My Projects</h2>
                <List>
                    <Card>
                        <Image />
                        <Info>
                            <h3>Bisnisku</h3>
                            <p>Deskripsi</p>
                        </Info>
                    </Card>
                    <Card>
                        <Image />
                        <Info>
                            <h3>SyntaxProject</h3>
                            <p>Deskripsi</p>
                        </Info>
                    </Card>
                    <Card>
                        <Image />
                        <Info>
                            <h3>Form PPDB Pesantren</h3>
                            <p>Deskripsi</p>
                        </Info>
                    </Card>
                </List>
                <h2>Works</h2>
                <List>
                    <Card>
                        <Image />
                        <Info>
                            <h3>PBKM</h3>
                            <p>Deskripsi</p>
                        </Info>
                    </Card>
                    <Card>
                        <Image />
                        <Info>
                            <h3>Special Moment</h3>
                            <p>Deskripsi</p>
                        </Info>
                    </Card>
                </List>
            </Container>
        </ProjectWorkContainer>
    )
}

export default ProjectWork
