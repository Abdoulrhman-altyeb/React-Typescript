import styled from 'styled-components'

const PaText: React.FC = ({children}) => {

    return (
        <TextContainer className='par'>
            {children}
        </TextContainer>
    )
}

const TextContainer = styled.div`
    max-width:500px;
    margin:0 auto;
    line-height:1.3em;
    font-family: 'Roboto Mono', monospace;
    font-size:1.3rem;
    @media only screen and (max-width:768px) {
        font-size:1.1rem;
    }
`;

export default PaText