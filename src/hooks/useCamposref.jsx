import React, { useRef } from 'react'

function useCamposref() {

    const nomeRef = useRef()
    const sangueRef = useRef()
    const hospitalRef = useRef()

    function limpar() {
        nomeRef.current.value = ""
        sangueRef.current.value = ""
        hospitalRef.current.value = ""

    }

    function validar() {
        if (nomeRef.current.value == "") {
            nomeRef.current.focus()
            throw new Error("Preencha o nome")
        }
        if (sangueRef.current.value == "") {
            sangueRef.current.focus()
            throw new Error("Preencha o tipo sanguíneo")
        }
        if (hospitalRef.current.value == "") {
            hospitalRef.current.focus()
            throw new Error("Preencha o hospital")
        }

    }






    return (
        {
            nomeRef: nomeRef,
            sangueRef: sangueRef,
            hospitalRef: hospitalRef,
            validar, limpar

        }

    )
}

export default useCamposref