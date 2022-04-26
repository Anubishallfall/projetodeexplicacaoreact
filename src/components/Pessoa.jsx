import React, { useContext } from 'react'
import { memo } from 'react'
import { PacientesContexto } from '../contexto/PacienteContext'

function Item({ paciente }) {

    const { removerPaciente } = useContext(PacientesContexto)

    return (
        <tr>
            <td>{paciente.nome}</td>
            <td>{paciente.sangue}</td>
            <td>{paciente.hospital}</td>
            <td>{paciente.dadosCompletos}</td>
            <td><input type="button" onClick={() => removerPaciente(paciente.id)} value="delete" /></td>
        </tr>

    )
}

export default memo(Item) 