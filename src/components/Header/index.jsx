import { RiShutDownLine } from 'react-icons/ri';

import { useAuth } from '../../hooks/auth';
import { Container, Logout, Profile } from './styles';

export function Header() {
    const { signOut } = useAuth();

    return(
        <Container>
            <Profile to="/profile">
                <img 
                    src="https://github.com/gabriel-assana.png"
                    alt="Foto do usuário"
                />
                <div>
                    <span>Bem-vindo</span>
                    <strong>Gabriel Assana</strong>
                </div>
            </Profile>       
            <Logout onClick={signOut}>
                <RiShutDownLine/>
            </Logout>

        </Container>
    )
}



