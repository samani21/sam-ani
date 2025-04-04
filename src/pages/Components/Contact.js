import { ContactContainer, Container, Content, Detail, Email, Github, Gitlab, Header, Icon, Instagram, Linkedin, Svg } from '@/Components/Contact'
import React from 'react'

const Contact = () => {
    return (
        <ContactContainer>
            <Container>
                <Content>
                    <Email>
                        <Header>
                            <Svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
                                <path fill="#fff" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" />
                            </Svg>
                            <Icon src='/image/share.svg' />
                        </Header>
                        <Detail>
                            <h3>Email</h3>
                            <p>eksloba21@gmail.com</p>
                        </Detail>
                    </Email>
                    <Linkedin>
                        <Header>
                            <Svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 24 24">
                                <path fill="#fff" d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z" />
                            </Svg>
                            <Icon src='/image/share.svg' onClick={() => window.open('https://www.linkedin.com/in/sam-ani-633b48210/', '_blank')} />
                        </Header>
                        <Detail style={{ marginTop: "5px" }}>
                            <h3>Linkedin</h3>
                            <p>Sam Ani</p>
                        </Detail>
                    </Linkedin>
                </Content>
                <Content>
                    <Github>
                        <Header>
                            <Svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
                                <path fill="#fff" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
                            </Svg>
                            <Icon src='/image/share.svg' onClick={() => window.open('https://github.com/samani21', '_blank')} />
                        </Header>
                        <Detail>
                            <h3>Github</h3>
                            <p>samani21</p>
                        </Detail>
                    </Github>
                    <Gitlab>
                        <Header>
                            <Svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
                                <path fill="#fff" d="M5.544 2.673a1.55 1.55 0 0 1 1.8.097v.001c.246.198.426.466.515.769l1.446 4.428h5.39L16.14 3.54a1.54 1.54 0 0 1 .515-.769l.004-.004a1.55 1.55 0 0 1 1.795-.095l.002.001c.274.174.486.43.605.732l.004.01l2.473 6.451a5.45 5.45 0 0 1-1.813 6.303l-6.73 5.064h-.002a1.66 1.66 0 0 1-2 0l-6.731-5.065a5.45 5.45 0 0 1-1.806-6.294l2.48-6.469c.12-.302.333-.558.607-.732m.811 2.063L4.16 10.464c-.28.737-.337 1.604-.12 2.362c.217.755.671 1.42 1.295 1.896l6.66 5.01l6.653-5.005a3.65 3.65 0 0 0 1.308-1.904c.22-.76.159-1.638-.123-2.378l-2.189-5.71L16 9.769H8z" />
                            </Svg>
                            <Icon src='/image/share.svg' onClick={() => window.open('https://gitlab.com/ekslobatristal', '_blank')} />
                        </Header>
                        <Detail>
                            <h3>Gitlab</h3>
                            <p>sam'ani</p>
                        </Detail>
                    </Gitlab>
                </Content>
                <Content>
                    <Instagram>
                        <Header>
                            <Svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
                                <circle cx="17" cy="7" r="1.5" fill="#fff" fill-opacity="0">
                                    <animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.15s" values="0;1" />
                                </circle>
                                <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                    <path stroke-dasharray="72" stroke-dashoffset="72" d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0" />
                                    </path>
                                    <path stroke-dasharray="28" stroke-dashoffset="28" d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.6s" values="28;0" />
                                    </path>
                                </g>
                            </Svg>
                            <Icon src='/image/share.svg' onClick={() => window.open('https://www.instagram.com/sam__ani/', '_blank')} />
                        </Header>
                        <Detail>
                            <h3>Github</h3>
                            <p>sam__ani</p>
                        </Detail>
                    </Instagram>
                    <Instagram>
                        <Header>
                            <Svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
                                <circle cx="17" cy="7" r="1.5" fill="#fff" fill-opacity="0">
                                    <animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.15s" values="0;1" />
                                </circle>
                                <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                    <path stroke-dasharray="72" stroke-dashoffset="72" d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0" />
                                    </path>
                                    <path stroke-dasharray="28" stroke-dashoffset="28" d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.6s" values="28;0" />
                                    </path>
                                </g>
                            </Svg>
                            <Icon src='/image/share.svg' onClick={() => window.open('https://www.instagram.com/syntax_project/', '_blank')} />
                        </Header>
                        <Detail>
                            <h3>Github</h3>
                            <p>syntax_project</p>
                        </Detail>
                    </Instagram>
                    <Instagram>
                        <Header>
                            <Svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
                                <circle cx="17" cy="7" r="1.5" fill="#fff" fill-opacity="0">
                                    <animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.15s" values="0;1" />
                                </circle>
                                <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                    <path stroke-dasharray="72" stroke-dashoffset="72" d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0" />
                                    </path>
                                    <path stroke-dasharray="28" stroke-dashoffset="28" d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.6s" values="28;0" />
                                    </path>
                                </g>
                            </Svg>
                            <Icon src='/image/share.svg' onClick={() => window.open('https://www.instagram.com/bisnisku_dot_info/', '_blank')} />
                        </Header>
                        <Detail>
                            <h3>Github</h3>
                            <p>bisnisku_dot_info</p>
                        </Detail>
                    </Instagram>

                </Content>
            </Container>
        </ContactContainer>
    )
}

export default Contact
