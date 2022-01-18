import styled from 'styled-components'

const StyledFooter = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #d3d3d3;
    text-align: center;
`

const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <p>Yet another React simple app</p>
        </StyledFooter>
    )
}

export default Footer
