import React from 'react';
import styled from 'styled-components';
import SectionsTitle from './SectionsTitle';

const ProjectsSection: React.FC = () => {
    return (
        <StyledDiv>
            <div className="container">
                <SectionsTitle title='Projects' semiTitle='some of my recent work'/>
                <div className="projects-wrapper">
                    <div className="project"></div>
                    <div className="project"></div>
                    <div className="project"></div>
                    <div className="project"></div>
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
    .projects-wrapper{
        background:white;
        width:100%;
        height:450px;
    }
`;
export default ProjectsSection;