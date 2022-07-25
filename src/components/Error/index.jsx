import error from '../../assets/404.svg';
import styled from 'styled-components'

const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const DivContent = styled.div`
    background: gray;
    border-radius: 20px;
    text-align: center;
    padding: 5em;
`

function Error() {
    return (
        <div>
            <DivContainer>
                <DivContent>
                    <img src={error} alt='Double erreur'/>
                    <h2>Il semblerait qu'il y ait un problème</h2>
                </DivContent>
            </DivContainer>
        </div>
    )
}

export default Error;