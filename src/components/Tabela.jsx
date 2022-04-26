import React, { useContext, useEffect, useState } from 'react'
import Item from './Pessoa'

import { PacientesContexto } from '../contexto/PacienteContext'

function Tab() {

    const [pacientes, setPacientes] = useState([])
    const { inscrever } = useContext(PacientesContexto);


    useEffect(() => {
        inscrever(funcaoObservadora)
    }, [])


    function funcaoObservadora(pacientesRecebido) {
        console.log(pacientesRecebido, "chamando")
        setPacientes([...pacientesRecebido])
    }

    return (
        <div>
            {pacientes.length > 0 &&
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Sangue</th>
                            <th>Hospital</th>
                            <th>Dados Completos</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            pacientes.map((paciente) =>
                                <Item paciente={paciente} key={paciente.id} />

                            )
                        }
                    </tbody>
                </table>
            }
        </div>
    )
}

export default Tab