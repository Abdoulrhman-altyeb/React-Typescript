import React from 'react';
import Button from './Button';
import PaText from './PaText';
import SectionsTitle from './SectionsTitle';
import styled from 'styled-components';

const AboutSection: React.FC = () => {
    return (
        <StyledDiv>
            <div className="container">
                <div className="aboutsection__left">
                    <SectionsTitle title='about me' semiTitle='let me introduce myself' className='section-title'/>
                    <PaText>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quis asperiores harum cupiditate voluptatibus dolore enim dicta repudiandae debitis nesciunt. Impedit, reprehenderit.</p>
                    </PaText>
                    <div className="aboutsection__buttons">
                        <Button outline={false} btnLink='/projects' btnText='Works'/>
                        <Button outline={true} btnLink='/about' btnText='Read More'/>
                    </div>
                </div>
                <div className="aboutsecction__right">
                    <img src='https://ayans-portfolio.netlify.app/static/media/about-sec-img.dc869837.png' alt='aboutsection' />
                </div>
            </div>
        </StyledDiv>
    )
}


const StyledDiv = styled.div`
    padding: 10rem 0 ;
    .container{
        display:flex;
        justify-content:center;
        align-items:center;
        text-align:left;
    }
    .par{
        margin: 0 auto 0 0;
        margin-top:1rem;
        margin-bottom:1rem;
    }
    /* .aboutsection__buttons{
        display:flex;
        align-items:center;
        justify-content:flex-start;
        gap:2rem;
        padding-top:1rem;
    } */
    .aboutsecction__right,
    .aboutsection__left {
        flex:1;
    }

    @media only screen and (max-width:768px) {
        .container{
            flex-direction:column;
            text-align:center;
        }
        .aboutsection__buttons{
            flex-direction:column;
            width:500px;
          a{
              width:100%;
          }
        }
        .aboutsecction__right{
            margin-top:1rem;
            width:100%;
        }
    }
`;

export default AboutSection;