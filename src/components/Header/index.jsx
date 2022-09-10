import { RiShutDownLine } from 'react-icons/ri';

import { Container, Logout, Profile } from './styles';

export function Header() {
    return(
        <Container>
            <Profile>
                <img 
                    src="https://github.com/gabriel-assana.png"
                    alt="Foto do usuário"
                />
                <div>
                    <span>Bem-vindo</span>
                    <strong>Gabriel Assana</strong>
                </div>
            </Profile>       
            <Logout>
                <RiShutDownLine/>
            </Logout>

        </Container>
    )
}



