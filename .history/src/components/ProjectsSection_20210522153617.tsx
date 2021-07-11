import React from 'react';
import styled from 'styled-components';
import SectionsTitle from './SectionsTitle';

const ProjectsSection: React.FC = () => {
    return (
        <StyledDiv>
            <div className="container">
                <SectionsTitle title='Projects' semiTitle='some of my recent work' />
                <div className="buttons">
                        <div id='prev'>left</div>
                        <div id='next'>rigth</div>
                </div>
                <div className="projects">
                    <div className="projects-wrapper">
                        <div className="project"></div>
                        <div className="project"></div>
                        <div className="project"></div>
                        <div className="project"></div>
                        <div className="project"></div>
                    </div>
                </div>
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    padding:8rem 0;
    .container {
        display:flex;
        flex-direction:column;
        text-align:center;
        position:relative;
    }
    .projects{
        width:100%;
        overflow: scroll;
        position:relative;
        scrollbar-arrow-color: #1E1E1E;
    }
    .projects-wrapper{
        height:550px;
        display: flex;
        width:2000px;
        align-items:center;
        gap:1rem;
        border:2px solid transparent;    
    }
    .project{
        width:400px;
        background:black;
        height: 100%;
        border-radius:2rem;
    }
    .buttons{
        position:absolute;
        top:12%;
        right:2rem;
        display: flex;
        gap:1rem;
        div{
            background:#1E1E1E;
            padding:1rem;
            border-radius:1rem;
            cursor: pointer;
        }

    }
    .title{
        margin-bottom:2rem;
    }
`;
export default ProjectsSection;