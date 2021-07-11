import React from 'react';
import styled from 'styled-components';
import SectionsTitle from './SectionsTitle';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore ,{Navigation} from 'swiper/core'
import Projects from '../data/Projects';
import Singleproject from './SingleProject'
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Navigation])

const ProjectsSection: React.FC = () => {
    return (
        <StyledDiv>
            <div className="container">
                <SectionsTitle title='Projects' semiTitle='some of my recent work' />
                <div className="projects__items">
                    <Swiper 
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        breakpoints={{
                            640:{
                                slidesPerView: 1,
                            },
                            768:{
                                slidesPerView: 2,
                            },
                            1200:{
                                slidesPerView:3,
                            }
                        }}
                    >
                        {Projects.map((project,index) => {
                            if(index >= 5) return null;
                            return(
                                <SwiperSlide key={project.id}>
                                    <Singleproject name={project.name} desc={project.desc} img={project.img} url={project.Link}/>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    padding:5rem 0;
    .container {
        display:flex;
        flex-direction:column;
        position:relative;
    }
    .projects__items{
        display: flex;
        gap:2.1rem;
        margin-top:50px;
    }
    .swiper-container{
        padding-top:80px;
        width:100%;
    }
    .swiper-button-prev,
    .swiper-button-next{
        width:50px;
        height:50px;
        display: flex;
        justify-content: center;
        align-items: center;
        color:gray;
        background:#1F1F1F;
        position:absolute;
        top:1rem;
        left:auto;
        right:60px;
        transform: translateY(50%);
        z-index: 10;
        border-radius: 12px;
    }
    .swiper-button-next{
        right:0;
    }
    .swiper-button-prev::after,
    .swiper-button-next::after{
        font-size:1rem;
    }
    .title{
        text-align:center
    }
`;
export default ProjectsSection;