import React, { createContext, useState, useEffect } from 'react';
import Paciente from '../model/Paciente';
import axios from 'axios';

export const PacientesContexto = createContext();
PacientesContexto.displayName = "PacientesContexto"


const servico = axios.create({
    baseURL: 'http://localhost:4000'
});


export function PacientesProvider({ children }) {
    // const [pacientes, setpacientes] = useState([]);

    let pacientes = [];
    const listaIncritos = [];

    useEffect(() => {
        listaPacientes()
    }, [])

    async function listaPacientes() {
        const { data } = await servico.get("/pacientes");
        // setpacientes(data)
        pacientes = data
        notificar()

    }

    async function deletar(id) {
        await servico.delete("/pacientes/" + id);
        // setpacientes(pacientes => pacientes.filter(p => p.id != id))
        pacientes = pacientes.filter(p => p.id != id)
        notificar()
    }


    async function cadastrar(paciente) {
        const { data } = await servico.post("/pacientes",
            {
                nome: paciente.nome,
                sangue: paciente.sangue,
                hospital: paciente.hospital
            });

        // setpacientes([...pacientes, data])
        pacientes.push(data)
        notificar()

    }


    function notificar() {
        listaIncritos.forEach(f => f(pacientes))
    }

    function inscrever(func) {
        listaIncritos.push(func)
    }

    return (
        <PacientesContexto.Provider value={{
            pacientes,
            inscrever,
            removerPaciente: deletar,
            cadastrar
        }}>
            {children}
        </PacientesContexto.Provider>
    )
}
