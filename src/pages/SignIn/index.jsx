import { FiLock, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import { Background, Container, Form } from './styles';


export function SignIn() {

    const data = useAuth();
    console.log("MEU CONTEXTO =>", data);
    
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
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Entrar"/> 

                <Link to="/register">
                    Criar Conta
                </Link>

            </Form>

            <Background/>
        </Container>
    )
}