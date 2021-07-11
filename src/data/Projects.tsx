import {v4 as uuidv4} from 'uuid'
// images
import MovieApp from '../assits/images/MovieApp.png';
import Slider from '../assits/images/Slider.jpg';
import phshop from '../assits/images/PhotoS2.jpg';
import Port from '../assits/images/Port2.png';
import passGen from '../assits/images/PassGen.png';
import Port2 from '../assits/images/Port3.png';
import colors from '../assits/images/Colors.png';
import manage from '../assits/images/manag.jpg';
import ecommers from '../assits/images/ERC.jpg';
import auth from '../assits/images/auth.png';
const Projects = [
        {
            id:uuidv4(),
            name:"Movie App",
            desc:"A movie app made by Vanilla Javascript can interact with the user serach and check the details of any movie you search.",
            img: MovieApp,
            Link:'https://movie-vanilla-app.netlify.app/'
        },
        {
            id:uuidv4(),
            name:"Portfolio",
            desc:"this project is a prortfolio i made with css framerwork and react tailwind with dark and light mode you can toggle it with a button",
            img: Port,
            Link:"https://programmer-portfolio.netlify.app/"
        },
        {
            id:uuidv4(),
            name:"Photoshop Clone",
            desc:"You can edit the image just like your using photoshop to edit images very easy to use and light on you laptop",
            img: phshop,
            Link:"https://photoshop-clone-site.netlify.app/"
        },
        {
            id:uuidv4(),
            name:"Customer Portfolio",
            desc:"I made this protfolio for a customer fully designed with css",
            img:Port2,
            Link:"https://animed-prot.netlify.app/"
        },
        {
            id:uuidv4(),
            name:'Colorfull',
            desc:'this is Color project for users to know how interact with color and when to use it ',
            img:colors,
            Link:'https://infallible-jennings-e4a7d0.netlify.app/'
        },
        {
            id:uuidv4(),
            name:"Password Generator",
            desc:"This is a Vanilla javascript Password Generator the user can use it to general random passwords with symbols or with capital and small letters",
            img: passGen,
            Link: "https://dazzling-borg-d8e4e4.netlify.app"
        },  
        {
            id:uuidv4(),
            name:"image Slider",
            desc:"You can slide between an image with the bark and the light mode by hovering over the image you will see the before and after result",
            img: Slider,
            Link:"https://pensive-ramanujan-464e73.netlify.app/"
        },
        {
            id:uuidv4(),
            name:'Mangment',
            desc:'A simple landing page made with html and css ',
            img:manage,
            Link:'https://epic-jackson-3926c8.netlify.app/'
        },
        {
            id:uuidv4(),
            name:'Ecommers',
            desc:'an ecommers app made with react that you can order any of the products u choose',
            img:ecommers,
            Link:'https://condescending-lumiere-a0bcc8.netlify.app'
        },
        {
            id:uuidv4(),
            name:'Firebase auth',
            desc:'this is a firebase react full authentication app ',
            img:auth,
            Link:'https://github.com/Abdoulrhman-altyeb/FireBase-Auth'
        }
]


export default Projects;