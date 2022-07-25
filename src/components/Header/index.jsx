import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import logo from "../../assets/dark-logo.png" 

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`
const StyledNav = styled.div`
    display: flex;
    justify-content: flex-end;
    position: relative;
    bottom: 5em;
    right: 1em;
`

const StyleImg = styled.img`
        margin-top: 1em;
`

function Header() {
    return (
        <div>
            <StyleImg src={logo}alt="logo"/>
            <nav>
                <StyledNav>
                    <StyledLink to="/">Accueil</StyledLink>
                    <StyledLink to="/freelances">Profils</StyledLink>
                    <StyledLink to="/survey/1"$isFullLink>Faire le test</StyledLink>
                </StyledNav>            
            </nav>
        </div>
    )
}

export default Header