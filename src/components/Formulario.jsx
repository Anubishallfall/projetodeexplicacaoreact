import React, { useContext } from 'react'

import { TextField, Typography, Grid, FormControl, InputLabel, Input, Button, Form } from '@mui/material';

import useCadastrar from '../hooks/useCadastrar';
import { PacientesContexto } from '../contexto/PacienteContext'
function Formulario() {

    const { cadastrar } = useContext(PacientesContexto)
    const { nomeRef, sangueRef, hospitalRef, limpar, validar } = useCadastrar()



    function handleCadastrar(e) {
        e.preventDefault();
        validar()
        cadastrar(
            {
                nome: nomeRef.current.value,
                sangue: sangueRef.current.value,
                hospital: hospitalRef.current.value
            }
        )

        limpar()

    }

    return (
        <Grid container justifyContent={'center'} flexDirection={'column'} maxWidth="400px">
            <Typography variant="p" component="h2">
                Cadastro
            </Typography>;
            <form onSubmit={handleCadastrar} style={{
                height: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <FormControl fullWidth>
                    <InputLabel htmlFor='nome'>Nome</InputLabel>
                    <Input id="nome" type="text" inputRef={nomeRef} placeholder="Digite o nome paciente" />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor='sangue'>Tipo sanguíneo </InputLabel>
                    <Input id="sangue" type="text" inputRef={sangueRef} placeholder="Digite o sangue do paciente" />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor='hospital'>Nome do hospital</InputLabel>
                    <Input id="hospital" type="text" inputRef={hospitalRef} placeholder="Digite o nome do hospital" />
                </FormControl>
                <FormControl>
                    <Button type="submit">cadastrar</Button>
                </FormControl>
            </form>
        </Grid>

    )
}

export default Formulario