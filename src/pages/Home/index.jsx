import { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';

import { ButtonText } from '../../components/ButtonText';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section';
import { api } from '../../services/api';
import { Brand, Container, Content, Menu, NewNote, Search } from './styles';

export function Home() {
    const [tags, setTags] = useState([]);


    useEffect(() =>{
        async function fetchTags(){
            const response = await api.get("/tags")
            setTags(response.data)
        }

        fetchTags();
    },[])

    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header/>

            <Menu>
                <li>
                    <ButtonText 
                        title="Todos" 
                        isActive
                    />
                </li>
                { 
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>
                            <ButtonText 
                                title={tag.name} 
                                isActive
                            />
                        </li>
                    ))
                }
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" />
            </Search>

            <Content>
                <Section title="Minhas notas"> 
                    <Note data={{ 
                            title: 'React', 
                            tags: [
                                { id: '1', name: 'react'},
                                { id: '2', name: 'rocketseat'}
                            ] 
                        }}
                    />
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                    Criar nota
            </NewNote>

        </Container>
    )
}