import styled from 'styled-components';

const Singleproject:React.FC<SingleProject> = ({name, img , desc , url}) =>{ 
    return(
        <ProjectContainerStyled className='card'>
            <a href={url} target="_blank" rel="noreferrer" className='project__img'>
                <img src={img} alt="projectImg" />
            </a>
            <div className="project__info">
                    <h3 className='Project__title'>{name}</h3>
                    <p className="project__desc">{desc}</p>
            </div>    
        </ProjectContainerStyled>
    )
};

const ProjectContainerStyled = styled.div`
    .project__img{
        width:100%;
        height:400px;
        overflow:hidden;
        border-radius:12px;
        display:inline-block;
        border: 3px solid #363636;
        img{
            height:100%;
        }
    }
    .project__info{
        padding-top:1rem;
        background:#1f1f1f;
        padding:1rem;
        border-radius: 12px;
    }
    .Project__title{
        font-size:1.3rem;
    }
    .project__desc{
        font-size:1rem;
        font-family: 'Roboto Regular', sans-serif;
        margin-top:1rem;
    }

    @media only screen and (max-width:768px) {
        .project__img{
            height:350px;
        }
    }
`;

export default Singleproject;