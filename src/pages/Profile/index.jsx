import { useState } from 'react';
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import { Avatar, Container, Form } from './styles';


export function Profile() {
    const { user } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft/>                   
                </Link>
            </header>

            <Form>
                <Avatar>
                   <img
                        src="https://github.com/gabriel-assana.png"
                        alt="Foto do usuário"
                   /> 
                   <label htmlFor="avatar">
                        <FiCamera/>

                        <input
                            id="avatar"
                            type="file"
                        />
                   </label>    
                </Avatar>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                
                <Input
                    placeholder="E-mail"
                    type="email"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                
                <Input
                    placeholder="Senha Atual"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}
                />

                <Input
                    placeholder=" Nova Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button title="Salvar"/>

            </Form>

        </Container>
    )
}