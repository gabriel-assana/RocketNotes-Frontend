import { FiLock, FiMail, FiUser } from 'react-icons/fi';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Background, Container, Form } from './styles';

export function SignUp() {
    return(
        <Container>
            <Background/>
            <Form>
                <h1> Rocket Notes</h1>
                <p>Alplicação para slavar e gerenciar seus links úteis.</p>

                <h2>Cria sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Cadastrar"/>

                <a href="#">
                    Voltar para o login
                </a>

            </Form>

        </Container>
    )
}