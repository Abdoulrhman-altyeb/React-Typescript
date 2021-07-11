import React  from 'react';
import styled from 'styled-components';
import Button from './Button';
import ContactButton from './ContactButton';
import FooterSection from './FooterSection';
import me from '../assits/images/me2.jpg'

const AboutSectionPage:React.FC =  () => {
    return (
        <>
        <StyledDiv>
          <div className="about-me-info">
              <div className="about-me-deatails">
                  <p className="pra">Hi, I am <span>Abdulrahman</span></p>
                  <h2 className='header'>A Frontend Web developer</h2>
                    <p className="pra">
                        I am from Khartoum, Shambat. A place of beauty and nature. Since my childhood, i love art and design. I always try to design stuff with my unique point of view. I also love to create things that can be usefull to others.<br/><br/>
                        I started coding not a while ago. But now Coding is also an art for me. I love it and now I have the opportunity to design along with the coding. I find it really interesting and I enjoyed the process a lot. <br /><br/>
                        My vision is to make the world a better place. Now almost everything is becoming better than ever. It is time for us to create more good stuff that helps the world to become a better place.</p><br/><br/>
                    <Button btnLink="/contact" btnText="Download CV " outline={false}/>
              </div>
              <div className="about-me-img">
                  <img src={me} alt="Img"/>
              </div>
          </div>
          <div className="info-Container">
                {/* Education  */}
            <div className="EXP">
                <h1>Education</h1>
                <div className="child">
                    <h2>School</h2>
                    <div className="info">
                        <p>SMA , HighSchool, KSA Elementary School</p>
                    </div>
                </div>
                <div className="child">
                    <h2>Collage</h2>
                    <div className="info">
                        <p>SUST Sudan Univercity for information and Tecnology</p>
                    </div>
                </div>
                <div className="child">
                    <h2>Varsity</h2>
                    <div className="info">
                        <p>SudanCode, One Million Projgrammer</p>
                    </div>
                </div>
            </div>

            {/* Skills  */}
            <div className="EXP">
                <h1>My Skills</h1>
                <div className="child">
                    <h2>FrontEnd</h2>
                    <div className="info">
                            <p>JavaScript</p>
                            <p>React</p>
                            <p>Redux</p>
                            <p>TypeScript</p>
                            <p>SCSS</p>
                            <p>Tailwind</p>
                    </div>
                </div>
                <div className="child">
                    <h2>Design</h2>
                    <div className="info">
                        <p>Adobe XD</p>
                        <p>Figma</p>
                    </div>
                </div>
            </div>

            {/* Exp  */}
            <div className="EXP">
                <h1>Experiences</h1>
                <div className="child">
                    <h2>2022- </h2>
                    <div className="info">
                        <p>junior developer at SudanCode</p>
                    </div>
                </div>
                 <div className="child">
                    <h2>2021-</h2>
                    <div className="info">
                        <p>Mentor and Guide </p>
                    </div>
                </div>
                {/* <div className="child">
                    <h2>Courses</h2>
                    <div className="info">
                        <p>SudanCode, One Million Projgrammer</p>
                    </div>
                </div>  */}
            </div>
          </div>

        </StyledDiv>
        <ContactButton />
        <FooterSection />
        </>
    )
}

const StyledDiv = styled.div`
    padding:10rem 0;
    max-width:1200px;
    width:100%;
    margin:auto;
    .pra{
            font-size:1.15rem;
            margin-top:2rem; 
    }
    .header {
        font-size:2rem;
        margin: 1rem 0;
        color: #BcB4b4;
    }
    span{
        background:#1f1f1f;
        padding:6px 4px;
        border-radius:12px;
    }
    .about-me-info{
        display:flex;
    }
    .about-me-deatails{
        flex:1;
    }
    .about-me-img{
        flex-basis: 450px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width:100%;
            border:2px solid gray;
        }
    }
    .EXP{ 
        margin-top:5rem;
    }
    .child{
        display: flex;
        align-items: center;
        margin-top:1rem;
        font-family: 'Roboto Mono', monospace;
    }
    .child h2 {
        color:#BcB4b4;
        padding-right:5rem;
        font-size:1.7rem;
        display: inline-block;
        width:200px;
    }
    .info{
        display: flex;
        align-items: center;
        flex-wrap:wrap;
        /* height:100%; */
    }
    .info > *{
        background:#1f1f1f;
        padding:10px 8px;
        border-radius:8px;
        margin-right:0.5rem;
        margin-bottom:0.2rem;
    }
    @media only screen and (max-width:1200px) {
        padding:8rem 0;
        .about-me-info{ 
            margin: 0 1rem;
        }
        .about-me-img{
            flex-basis: 400px;
            img{
                width:100%;
                border:2px solid gray;
        }
        .info-Container{
            padding:0 1rem;
        }
    }
    }
    @media only screen and (max-width:990px) {
        padding:6rem 0;
        .about-me-info {
            margin:0 1rem;
        }
        .about-me-img {
            flex-basis : 350px
        }
        .info-Container{
            padding:0 1rem;
        }
    }
    @media only screen and (max-width:768px){
        padding:3rem 0;
        .about-me-info{
            flex-direction:column;
            margin: 0 1rem;
        }
        .about-me-img{
            margin-top:2rem;
        }
                .child{
            flex-direction:column;
            align-items:flex-start;
            flex-wrap:wrap;
        }
        .child h2 {
            font-size:1.2rem
        }
        .child .info p {
            font-size:0.9rem;
        }
        .pra{
            font-size:1rem;
        }
        .header {
            font-size:1.3rem;
        }
    }
`;


export default AboutSectionPage;