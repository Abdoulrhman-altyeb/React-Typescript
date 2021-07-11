import React ,{useEffect, useRef, useState}from 'react';
import styled from 'styled-components';
import SectionsTitle from './SectionsTitle';
import Projects from '../data/Projects'
import Singleproject from './SingleProject';

const ProjectsSectionSerach:React.FC = () => {

    const [search, setSearch] = useState('');
    const input = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const Focus = input.current;
        Focus?.focus();
    },[])

    return(
        <StyledDiv>
            <div className="container">
                <SectionsTitle title='Projects' semiTitle='Some of my recent Projects' />
            </div>
            <div className="projects-search">
                <form>
                    <input type="text" ref={input}  value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Project Name"/>
                    <i className='fa fa-search'></i>
                </form>
                <div className="projects__container">
                    {Projects.filter(value => {
                        if(search === '') return value;
                        if(value.name.toLowerCase().includes(search.toLowerCase())) return value;
                        return '';
                    }).map(project => {
                        return(
                            <Singleproject key={project.id} img={project.img} desc={project.desc} name={project.name} url={project.Link}/> 
                        )
                    })}
                </div>
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    padding:4rem 0;
    max-width:1200px;
    width:100%;
    margin:auto;
    .container{
        padding-top:2.5rem;
        display:flex;
        flex-direction:column;
        text-align:center;
        position:relative;
        .title p{
            font-size:1.1rem; 
        }
    }
    form {
        margin:2rem 0 4rem 0;
        width:320px;
        background:white;
        border-radius:8px;
        overflow: hidden;
        i {
            color:#363636;
            margin-right:3px;
        }
    }
    form input{
        padding:0.7rem ;
        border:none;
        outline: none;
        width:90%;
        font-size:1rem;
    }
    form input::placeholder{
        color:#1f1f1f;
        font-size:1.3rem;
        letter-spacing: 2px;
    }
    .projects__container{
        display: flex;
        flex-wrap: wrap;
        gap:2rem;
        .card{
            width:calc((100% / 3) - 3rem);
        }
    }
    @media only screen and (max-width:990px) {
    .projects__container{
            gap:3rem;
            .card{
                width:calc(50% - 3rem);
            }
        }
    }

    @media only screen and (max-width:640px){
        form {
            margin-left:1rem
        }
        .projects__container{
            gap:3rem;
            .card{
                width:100%;
            }
        }
    }
`;


export default ProjectsSectionSerach;