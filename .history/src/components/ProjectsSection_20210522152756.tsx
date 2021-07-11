import React from 'react';
import styled from 'styled-components';
import SectionsTitle from './SectionsTitle';

const ProjectsSection: React.FC = () => {
    return (
        <StyledDiv>
            <div className="container">
                <SectionsTitle title='Projects' semiTitle='some of my recent work' />
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
    }
    .projects{
        width:100%;
        overflow: hidden;
        overflow: scroll;
    }
    .projects-wrapper{
        background:white;
        height:550px;
        display: flex;
        width:2000px;
        align-items:center;
        gap:1rem;
        padding:1rem 0;
    }
    .project{
        width:400px;
        background:black;
        height: 100%;
    }
    .title{
        margin-bottom:2rem;
    }
`;
export default ProjectsSection;