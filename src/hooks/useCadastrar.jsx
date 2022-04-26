import React from 'react'
import useCamposref from './useCamposref';

function useCadastrar() {

    const { nomeRef, sangueRef, hospitalRef, validar, limpar } = useCamposref();

    return ({
        nomeRef: nomeRef,
        sangueRef: sangueRef,
        hospitalRef: hospitalRef,
        limpar,
        validar
    })
}

export default useCadastrar