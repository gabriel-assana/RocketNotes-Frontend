import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Container, Form } from './styles';


export function Profile() {
    return(
        <Container>
            <header>
                <a href="/">
                    <FiArrowLeft/>                   
                </a>
            </header>

            <Form>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />
                
                <Input
                    placeholder="E-mail"
                    type="email"
                    icon={FiMail}
                />
                
                <Input
                    placeholder="Senha Atual"
                    type="password"
                    icon={FiLock}
                />

                <Input
                    placeholder=" Nova Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Salvar"/>

            </Form>

        </Container>
    )
}