import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card';
import styled from 'styled-components'

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
]

const CardsContainer = styled.div`
    display: grid;
    gap: 20px;
    grid-template-rows: 250px 250px;
    grid-template-columns: repeat(2,0fr);
    justify-items: center;
    align-items: center;
    justify-content: center;
`
const StyleTitle1 = styled.h1`
    text-align: center;
`

const StyleTitle3 = styled.h1`
    text-align: center;
    color: grey;
`

function Freelances() {
    return (
        <div>
            <StyleTitle1>Trouvez votre prestataire</StyleTitle1>
            <StyleTitle3>Chez Shiny nous réunissons les meilleurs profils pour vous.</StyleTitle3>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        title={profile.name}
                        picture={profile.picture}
                    />
                ))}
            </CardsContainer>
        </div>
    )
}

export default Freelances;