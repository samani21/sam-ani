import { Container, Date, ExperienceContainer, Item, TimeLine } from '@/Components/Experience'
import React from 'react'

const Experience = () => {
    return (
        <ExperienceContainer>
            <Container>
                <h2>Experience</h2>
                <TimeLine>
                    <Item>
                        <Date>2025 - Sekarang</Date>
                        <div class="timeline-content">
                            <h3>Founder & CEO </h3>
                            <p>Bisnisku - Mengelola keuangan dan e-commerce brand sendiri dan pengembangan bisnis.</p>
                        </div>
                    </Item>
                    <Item>
                        <Date>2024 - Sekarang</Date>
                        <div class="timeline-content">
                            <h3>Full Stack Web Developer</h3>
                            <p>PT. Kelayan Digitek Sinergia -  Membangun website custom untuk berbagai klien.</p>
                        </div>
                    </Item>
                    <Item>
                        <Date>2023 - Sekarang</Date>
                        <div class="timeline-content">
                            <h3>Freelance Web Developer</h3>
                            <p>Freelance - Mengerjakan proyek pengembangan website untuk berbagai klien, termasuk desain UI/UX dan optimasi performa.</p>
                        </div>
                    </Item>
                </TimeLine>
            </Container>
        </ExperienceContainer>
    )
}

export default Experience
