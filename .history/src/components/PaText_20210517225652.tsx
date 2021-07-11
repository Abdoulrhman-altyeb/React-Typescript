import styled from 'styled-components'

const PaText: React.FC = ({children}) => {

    return (
        <TextContainer>
            {children}
        </TextContainer>
    )
}

const TextContainer = styled.div`
    max-width:500px;
    margin:0 auto;
    line-height:1.3rem;
    font-size:1.5rem;
    @media only screen and (max-width:768px) {
        font-size:1.3rem;
    }
`;

export default PaText