import React from 'react';
import SectionsTitle from './SectionsTitle';

const ProjectsSection: React.FC = () => {
    return (
        <div className="container">
            <SectionsTitle title='Propjects' semiTitle='some of my recent work'/>
            <h1>This is the projects section</h1>
        </div>
    )
}

export default ProjectsSection;