import { useEffect, useState } from 'react';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import ModalAdd from '../Components/Modals/ModalAdd';

const Tabela = () => {

    const [alunos,setAlunos] = useState([]);

    useEffect(() =>{
        // let url = '!ENDPOINT_SHEETY!!';
        let url = 'https://api.sheety.co/9d92e891538b64858a9b0a1f2a3fe7d3/alunos/dn2N';
        fetch(url)
            .then((response) => response.json())
                .then(json => {
                // Do something with the data
                    setAlunos(json.dn2N);
                })
                .catch((erro) =>{
                    console.log(erro)
                })
    },[])

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }
    return (
        <div>
            <ModalAdd status={modalIsOpen} setStatus={setIsOpen}></ModalAdd>
            <Button variant="light" size="lg" onClick={openModal}>Adicionar</Button>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Matricula</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Telefone</th>
                        <th>Turno</th>
                        <th>Status</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alunos.map((dado, index) => {
                            return (
                                <tr key={dado.id}>
                                    <td>{index}</td>
                                    <td>{dado.matricula}</td>
                                    <td>{dado.nome}</td>
                                    <td>{dado.cpf}</td>
                                    <td>{dado.telefone}</td>
                                    <td>{dado.turno}</td>
                                    <td>{dado.status}</td>
                                    <td>
                                        <Button variant="light">Editar</Button>
                                        <Button variant="light">Deletar</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
        </div>
    )
}

export default Tabela;