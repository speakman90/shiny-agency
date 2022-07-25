import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../utils/style/colors';
import wallpaper from "../../assets/home-illustration.svg" 

const StyledHome = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
  height: 50vh;
  margin: auto;
  background-color: ${colors.backgroundLight};
  border-radius: 20px;
  padding: 5em;
`

const StyledLink = styled(Link)`
    padding: 10px 7.5em;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`


function Home() {
  return (
    <StyledHome>
      <img src={wallpaper} alt='allo'/>
      <div>
        <h1>Repérez vos besoins,</h1>
        <h1> on s'occupe du reste,</h1>
        <h1>avec les meilleurs talent</h1>
        <StyledLink to="/survey/1"$isFullLink>Faire le test</StyledLink>
      </div>
    </StyledHome>
  );
}

export default Home;
