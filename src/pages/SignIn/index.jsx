import { FiLock, FiMail } from 'react-icons/fi';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Background, Container, Form } from './styles';

export function SignIn() {
    return(
        <Container>
            <Form>
                <h1> Rocket Notes</h1>
                <p>Alplicação para slavar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="E-mail"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Entrar"/>

                <a href="#">
                    Criar Conta
                </a>

            </Form>

            <Background/>
        </Container>
    )
}