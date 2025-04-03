import { Container, Skill, SkillsContainer } from '@/Components/Skills'
import React from 'react'

const Skills = () => {
    return (
        <SkillsContainer>
            <Container>
                <h1>My Skills</h1>
                <Skill className='html'>
                    <div class="skill-name">HTML</div>
                    <div class="skill-bar">
                        <div class="skill-progress"></div>
                    </div>
                </Skill>
                <Skill className='css'>
                    <div class="skill-name">CSS</div>
                    <div class="skill-bar">
                        <div class="skill-progress"></div>
                    </div>
                </Skill>
                <Skill className='javascript'>
                    <div class="skill-name">Javascript</div>
                    <div class="skill-bar">
                        <div class="skill-progress"></div>
                    </div>
                </Skill>
                <Skill className='react'>
                    <div class="skill-name">React.js</div>
                    <div class="skill-bar">
                        <div class="skill-progress"></div>
                    </div>
                </Skill>
                <Skill className='nextjs'>
                    <div class="skill-name">Next.Js</div>
                    <div class="skill-bar">
                        <div class="skill-progress"></div>
                    </div>
                </Skill>
                <Skill className='mysql'>
                    <div class="skill-name">MySQL</div>
                    <div class="skill-bar">
                        <div class="skill-progress"></div>
                    </div>
                </Skill>
                <Skill className='php'>
                    <div class="skill-name">PHP</div>
                    <div class="skill-bar">
                        <div class="skill-progress"></div>
                    </div>
                </Skill>
                <Skill className='laravel'>
                    <div class="skill-name">Laravel</div>
                    <div class="skill-bar">
                        <div class="skill-progress"></div>
                    </div>
                </Skill>
                <Skill className='ci'>
                    <div class="skill-name">CodeIgniter</div>
                    <div class="skill-bar">
                        <div class="skill-progress"></div>
                    </div>
                </Skill>
            </Container>
        </SkillsContainer>
    )
}

export default Skills
